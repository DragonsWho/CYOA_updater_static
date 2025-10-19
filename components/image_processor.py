import os
import math
import shutil
import tempfile
import logging
import base64
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

    def _process_cover(self, img: Image.Image) -> Image.Image:
        """
        Обрабатывает изображение обложки: изменяет размер, затем обрезает от ВЕРХНЕГО края.
        """
        if img.mode in ("RGBA", "P", "LA"):
            img = img.convert("RGB")

        # Шаг 1: Ресайз до 600px по ширине с сохранением пропорций
        if img.width > self.COVER_MAX_WIDTH:
            new_height = int(self.COVER_MAX_WIDTH * img.height / img.width)
            logger.info(f"Resizing cover from {img.width}x{img.height} to {self.COVER_MAX_WIDTH}x{new_height}")
            img = img.resize((self.COVER_MAX_WIDTH, new_height), Image.Resampling.LANCZOS)

        # Шаг 2: Обрезка до соотношения 3:4 от ВЕРХНЕГО края
        target_height = int(img.width / self.COVER_ASPECT_RATIO)
        if img.height > target_height:
            # --- ИЗМЕНЕНИЕ ЗДЕСЬ ---
            top = 0  # Начинаем с самого верха
            bottom = top + target_height
            logger.info(f"Cropping cover from top to {img.width}x{target_height}")
            img = img.crop((0, top, img.width, bottom))
            # ----------------------
        
        return img

    def _generate_base64_placeholder(self, cover_image: Image.Image) -> str:
        placeholder_img = cover_image.copy()
        placeholder_img.thumbnail(
            (self.PLACEHOLDER_TARGET_WIDTH, self.PLACEHOLDER_TARGET_HEIGHT), 
            self.PLACEHOLDER_RESAMPLE_METHOD
        )
        
        buf = BytesIO()
        placeholder_img.save(buf, format="WEBP", quality=self.PLACEHOLDER_QUALITY, lossless=False)
        b64_str = base64.b64encode(buf.getvalue()).decode('utf-8')
        data_uri = f"data:image/webp;base64,{b64_str}"
        
        logger.info("Generated Base64 placeholder.")
        return data_uri

    def _process_page(self, img: Image.Image, output_folder: str, original_basename: str):
        if img.mode in ("RGBA", "P", "LA"):
            img = img.convert("RGB")

        if img.height > self.PAGE_MAX_HEIGHT:
            logger.warning(f"Image '{original_basename}' is too tall ({img.height}px). Splitting into chunks.")
            num_chunks = math.ceil(img.height / self.PAGE_MAX_HEIGHT)
            for i in range(num_chunks):
                top = i * self.PAGE_MAX_HEIGHT
                bottom = min((i + 1) * self.PAGE_MAX_HEIGHT, img.height)
                chunk = img.crop((0, top, img.width, bottom))
                
                base, _ = os.path.splitext(original_basename)
                chunk_name = f"{base}_part{i+1}.webp"
                chunk_path = os.path.join(output_folder, chunk_name)
                
                logger.info(f"Saving chunk {i+1}/{num_chunks} as lossless WebP to {chunk_path}")
                chunk.save(chunk_path, 'WEBP', lossless=True)
        else:
            webp_path = os.path.join(output_folder, f"{os.path.splitext(original_basename)[0]}.webp")
            logger.info(f"Converting page '{original_basename}' to lossless WebP.")
            img.save(webp_path, 'WEBP', lossless=True)

    def process_game_folder(self, source_folder_path: str) -> tuple[str, str | None]:
        logger.info(f"Starting image processing for '{os.path.basename(source_folder_path)}'")
        temp_dir = tempfile.mkdtemp(prefix="cyoa_processing_")
        logger.info(f"Created temporary processing directory: {temp_dir}")
        base64_placeholder = None
        
        try:
            image_files = sorted([f for f in os.listdir(source_folder_path) if f.lower().endswith(self.ALLOWED_EXTENSIONS)])
            if not image_files:
                raise ValueError("No image files found in the source folder.")

            cover_filename = image_files[0]
            cover_path = os.path.join(source_folder_path, cover_filename)
            with Image.open(cover_path) as img:
                processed_cover_img = self._process_cover(img)
                
                output_cover_path = os.path.join(temp_dir, f"cover_{os.path.splitext(cover_filename)[0]}.webp")
                processed_cover_img.save(output_cover_path, 'WEBP', quality=self.COVER_QUALITY)
                logger.info(f"Saved processed cover to {output_cover_path}")

                base64_placeholder = self._generate_base64_placeholder(processed_cover_img)
            
            logger.info("Processing all files as CYOA pages (lossless)...")
            for page_filename in image_files:
                page_path = os.path.join(source_folder_path, page_filename)
                with Image.open(page_path) as img:
                    self._process_page(img, temp_dir, page_filename)
            
            return temp_dir, base64_placeholder
        
        except Exception as e:
            shutil.rmtree(temp_dir)
            logger.error(f"Error during image processing: {e}", exc_info=True)
            raise