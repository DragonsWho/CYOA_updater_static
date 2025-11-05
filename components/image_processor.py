# components/image_processor.py

import os
import sys
import math
import shutil
import tempfile
import logging
import base64
import subprocess
from io import BytesIO
from PIL import Image, ImageFile

ImageFile.LOAD_TRUNCATED_IMAGES = True
Image.MAX_IMAGE_PIXELS = None

logger = logging.getLogger(__name__)

class ImageProcessor:
    def __init__(self, cover_quality=80, placeholder_quality=40):
        self.COVER_MAX_WIDTH = 600
        self.COVER_ASPECT_RATIO = 3 / 4
        self.COVER_QUALITY = cover_quality

        self.PLACEHOLDER_TARGET_WIDTH = 100
        self.PLACEHOLDER_TARGET_HEIGHT = 133
        self.PLACEHOLDER_QUALITY = placeholder_quality
        self.PLACEHOLDER_RESAMPLE_METHOD = Image.Resampling.LANCZOS

        self.PAGE_MAX_HEIGHT = 16383
        
        self.ALLOWED_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp')

    # ... (функции _process_cover и _generate_base64_placeholder остаются без изменений) ...
    def _process_cover(self, img: Image.Image) -> Image.Image:
        if img.mode in ("RGBA", "P", "LA"):
            img = img.convert("RGB")
        if img.width > self.COVER_MAX_WIDTH:
            new_height = int(self.COVER_MAX_WIDTH * img.height / img.width)
            logger.info(f"Resizing cover from {img.width}x{img.height} to {self.COVER_MAX_WIDTH}x{new_height}")
            img = img.resize((self.COVER_MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
        target_height = int(img.width / self.COVER_ASPECT_RATIO)
        if img.height > target_height:
            top = 0
            bottom = top + target_height
            logger.info(f"Cropping cover from top to {img.width}x{target_height}")
            img = img.crop((0, top, img.width, bottom))
        return img

    def _generate_base64_placeholder(self, cover_image: Image.Image) -> str:
        placeholder_img = cover_image.copy()
        placeholder_img.thumbnail((self.PLACEHOLDER_TARGET_WIDTH, self.PLACEHOLDER_TARGET_HEIGHT), self.PLACEHOLDER_RESAMPLE_METHOD)
        buf = BytesIO()
        placeholder_img.save(buf, format="WEBP", quality=self.PLACEHOLDER_QUALITY, lossless=False)
        b64_str = base64.b64encode(buf.getvalue()).decode('utf-8')
        data_uri = f"data:image/webp;base64,{b64_str}"
        logger.info("Generated Base64 placeholder.")
        return data_uri


    def _run_manual_splitter(self, image_path: str, output_dir: str):
        """Вызывает внешний скрипт для ручного разрезания."""
        logger.warning(f"Image {os.path.basename(image_path)} is too tall. Launching manual splitter tool...")
        
        script_path = "manual_splitter.py"
        # Находим python-интерпретатор, который запущен сейчас
        python_executable = sys.executable
        
        # Запускаем сплиттер как дочерний процесс и ждем его завершения
        process = subprocess.run([python_executable, script_path, image_path, output_dir])
        
        if process.returncode != 0:
            logger.error("Manual splitting was cancelled by the user or failed.")
            raise InterruptedError("Manual splitting process was unsuccessful.")
        
        logger.info("Manual splitting completed successfully.")

    def process_game_folder(self, source_folder_path: str) -> tuple[str, str | None]:
        logger.info(f"Starting image pre-processing for '{os.path.basename(source_folder_path)}'")
        temp_dir = tempfile.mkdtemp(prefix="cyoa_processing_")
        logger.info(f"Created temporary directory for processed files: {temp_dir}")
        base64_placeholder = None
        
        try:
            image_files = sorted([f for f in os.listdir(source_folder_path) if f.lower().endswith(self.ALLOWED_EXTENSIONS)])
            if not image_files:
                raise ValueError("No image files found.")

            # --- Шаг 1: Предварительная обработка страниц (разрезание высоких) ---
            for filename in image_files:
                original_path = os.path.join(source_folder_path, filename)
                with Image.open(original_path) as img:
                    if img.height > self.PAGE_MAX_HEIGHT:
                        self._run_manual_splitter(original_path, temp_dir)
                    else:
                        # Если не высокая, просто копируем в temp для дальнейшей обработки
                        shutil.copy(original_path, temp_dir)

            # --- Шаг 2: Обработка обложки (из исходников) ---
            cover_filename = image_files[0]
            cover_path = os.path.join(source_folder_path, cover_filename)
            with Image.open(cover_path) as img:
                processed_cover_img = self._process_cover(img)
                output_cover_path = os.path.join(temp_dir, f"cover_{os.path.splitext(cover_filename)[0]}.webp")
                processed_cover_img.save(output_cover_path, 'WEBP', quality=self.COVER_QUALITY)
                logger.info(f"Saved processed cover to {output_cover_path}")
                base64_placeholder = self._generate_base64_placeholder(processed_cover_img)
            
            # --- Шаг 3: Конвертация ВСЕХ страниц в temp в lossless WebP ---
            # Это обработает и скопированные, и разрезанные файлы
            logger.info("Converting all pages in temp directory to lossless WebP...")
            # Получаем список файлов в temp, исключая уже созданную обложку
            files_in_temp = [f for f in os.listdir(temp_dir) if not f.startswith("cover_")]
            for filename in files_in_temp:
                path_in_temp = os.path.join(temp_dir, filename)
                with Image.open(path_in_temp) as img:
                    # Конвертируем в RGB, если нужно
                    if img.mode in ("RGBA", "P", "LA"):
                        img = img.convert("RGB")
                    
                    webp_path = os.path.join(temp_dir, f"{os.path.splitext(filename)[0]}.webp")
                    img.save(webp_path, 'WEBP', lossless=True)
                    
                    # Удаляем исходный файл из temp, если он не webp
                    if os.path.splitext(path_in_temp)[1].lower() != '.webp':
                        os.remove(path_in_temp)
            
            return temp_dir, base64_placeholder
        
        except Exception as e:
            shutil.rmtree(temp_dir)
            logger.error(f"Error during image processing: {e}", exc_info=True)
            raise