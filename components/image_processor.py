import os
import sys
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

# Специальное исключение для отложенной обработки
class RequiresManualSplitException(Exception):
    pass

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

    def _process_cover(self, img: Image.Image) -> Image.Image:
        # (Код без изменений)
        if img.mode in ("RGBA", "P", "LA"):
            img = img.convert("RGB")
        if img.width > self.COVER_MAX_WIDTH:
            new_height = int(self.COVER_MAX_WIDTH * img.height / img.width)
            # logger.info убран для краткости, верните если нужно
            img = img.resize((self.COVER_MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
        target_height = int(img.width / self.COVER_ASPECT_RATIO)
        if img.height > target_height:
            top = 0
            bottom = top + target_height
            img = img.crop((0, top, img.width, bottom))
        return img

    def _generate_base64_placeholder(self, cover_image: Image.Image) -> str:
        # (Код без изменений)
        placeholder_img = cover_image.copy()
        placeholder_img.thumbnail((self.PLACEHOLDER_TARGET_WIDTH, self.PLACEHOLDER_TARGET_HEIGHT), self.PLACEHOLDER_RESAMPLE_METHOD)
        buf = BytesIO()
        placeholder_img.save(buf, format="WEBP", quality=self.PLACEHOLDER_QUALITY, lossless=False)
        b64_str = base64.b64encode(buf.getvalue()).decode('utf-8')
        return f"data:image/webp;base64,{b64_str}"

    def _run_manual_splitter(self, image_path: str, output_dir: str):
        # (Код без изменений)
        logger.warning(f"Image {os.path.basename(image_path)} is too tall. Launching manual splitter tool...")
        script_path = "manual_splitter.py"
        python_executable = sys.executable
        process = subprocess.run([python_executable, script_path, image_path, output_dir])
        if process.returncode != 0:
            logger.error("Manual splitting was cancelled by the user or failed.")
            raise InterruptedError("Manual splitting process was unsuccessful.")
        logger.info("Manual splitting completed successfully.")

    def process_game_folder(self, source_folder_path: str, allow_manual_split: bool = True) -> tuple[str, str | None]:
        """
        allow_manual_split: Если False, выбрасывает исключение при обнаружении длинной картинки.
        """
        logger.info(f"Starting image pre-processing for '{os.path.basename(source_folder_path)}'")
        temp_dir = tempfile.mkdtemp(prefix="cyoa_processing_")
        base64_placeholder = None
        
        try:
            image_files = sorted([f for f in os.listdir(source_folder_path) if f.lower().endswith(self.ALLOWED_EXTENSIONS)])
            if not image_files:
                raise ValueError("No image files found.")

            # --- Шаг 1: Проверка и обработка страниц ---
            for filename in image_files:
                original_path = os.path.join(source_folder_path, filename)
                with Image.open(original_path) as img:
                    if img.height > self.PAGE_MAX_HEIGHT:
                        if not allow_manual_split:
                            # !!! ВАЖНОЕ ИЗМЕНЕНИЕ !!!
                            # Если сплит запрещен, мы немедленно прерываем обработку
                            logger.info(f"Image {filename} requires splitting but interactive mode is OFF.")
                            raise RequiresManualSplitException(f"Image {filename} requires splitting.")
                        
                        self._run_manual_splitter(original_path, temp_dir)
                    else:
                        shutil.copy(original_path, temp_dir)

            # --- Шаг 2: Обработка обложки ---
            cover_filename = image_files[0]
            cover_path = os.path.join(source_folder_path, cover_filename)
            with Image.open(cover_path) as img:
                processed_cover_img = self._process_cover(img)
                output_cover_path = os.path.join(temp_dir, f"cover_{os.path.splitext(cover_filename)[0]}.webp")
                processed_cover_img.save(output_cover_path, 'WEBP', quality=self.COVER_QUALITY)
                base64_placeholder = self._generate_base64_placeholder(processed_cover_img)
            
            # --- Шаг 3: Конвертация в WebP ---
            files_in_temp = [f for f in os.listdir(temp_dir) if not f.startswith("cover_")]
            for filename in files_in_temp:
                path_in_temp = os.path.join(temp_dir, filename)
                with Image.open(path_in_temp) as img:
                    if img.mode in ("RGBA", "P", "LA"):
                        img = img.convert("RGB")
                    webp_path = os.path.join(temp_dir, f"{os.path.splitext(filename)[0]}.webp")
                    img.save(webp_path, 'WEBP', lossless=True)
                    if os.path.splitext(path_in_temp)[1].lower() != '.webp':
                        os.remove(path_in_temp)
            
            return temp_dir, base64_placeholder
        
        except Exception:
            # Чистим за собой, если упала ошибка (или исключение RequiresManualSplitException)
            shutil.rmtree(temp_dir)
            raise