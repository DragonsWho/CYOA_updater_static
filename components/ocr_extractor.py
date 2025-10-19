import os
from google.cloud import vision
import logging
from tqdm import tqdm

logger = logging.getLogger(__name__)

# Расширения файлов, которые мы считаем изображениями
IMAGE_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.webp')

class OCRExtractor:
    def __init__(self):
        try:
            self.client = vision.ImageAnnotatorClient()
            logger.info("Google Cloud Vision client initialized successfully.")
        except Exception as e:
            logger.critical(f"Failed to initialize Google Cloud Vision client. Check your credentials.")
            logger.critical(f"Error details: {e}")
            raise

    def _recognize_text_from_content(self, image_content: bytes):
        """Отправляет бинарное содержимое изображения в API и возвращает текст."""
        try:
            image = vision.Image(content=image_content)
            response = self.client.document_text_detection(image=image)

            if response.error.message:
                raise Exception(f"Vision API error: {response.error.message}")

            return response.full_text_annotation.text if response.full_text_annotation else ""
        except Exception as e:
            logger.error(f"Error during text recognition: {e}")
            return None

    def extract_text_from_folder(self, folder_path: str) -> str:
        """
        Извлекает и объединяет текст со всех изображений в указанной папке.
        """
        logger.info(f"Starting text extraction from folder: {folder_path}")
        
        if not os.path.isdir(folder_path):
            logger.error(f"Provided path is not a directory: {folder_path}")
            return ""

        image_files = sorted([
            f for f in os.listdir(folder_path) 
            if f.lower().endswith(IMAGE_EXTENSIONS)
        ])

        if not image_files:
            logger.warning(f"No image files found in {folder_path}")
            return ""

        logger.info(f"Found {len(image_files)} images to process.")
        
        all_pages_text = []
        
        for filename in tqdm(image_files, desc=f"OCR for '{os.path.basename(folder_path)}'"):
            image_path = os.path.join(folder_path, filename)
            try:
                with open(image_path, 'rb') as image_file:
                    content = image_file.read()
                
                recognized_text = self._recognize_text_from_content(content)
                if recognized_text:
                    all_pages_text.append(recognized_text)
                else:
                    logger.warning(f"No text recognized from {filename}")

            except Exception as e:
                logger.error(f"Failed to process image {filename}: {e}")
                continue
        
        if not all_pages_text:
            logger.error(f"Failed to extract any text from the folder: {folder_path}")
            return ""

        full_text = "\n\n--- PAGE BREAK ---\n\n".join(all_pages_text)
        logger.info(f"Successfully extracted {len(full_text)} characters from {len(all_pages_text)} pages.")
        return full_text