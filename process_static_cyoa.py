import os
import sys
import shutil
import logging
import json
from dotenv import load_dotenv
from tqdm import tqdm

from components.ocr_extractor import OCRExtractor
from components.api_helper import ApiHelper
from components.llm_handler import LLMHandler
from components.game_uploader import GameUploader
from components.image_processor import ImageProcessor

logger = logging.getLogger(__name__)

def setup_logging():
    os.makedirs("logs", exist_ok=True)
    log_formatter = logging.Formatter('%(asctime)s - %(levelname)s - [%(filename)s:%(lineno)d] - %(message)s')
    
    file_handler = logging.FileHandler("logs/processing.log", encoding='utf-8')
    file_handler.setFormatter(log_formatter)
    
    stream_handler = logging.StreamHandler(sys.stdout)
    stream_handler.setFormatter(log_formatter)
    
    root_logger = logging.getLogger()
    root_logger.setLevel(logging.INFO)
    
    if root_logger.hasHandlers():
        root_logger.handlers.clear()
        
    root_logger.addHandler(file_handler)
    root_logger.addHandler(stream_handler)
    
    logging.getLogger("google.auth.transport.requests").setLevel(logging.WARNING)
    logging.getLogger("urllib3.connectionpool").setLevel(logging.WARNING)
    logging.getLogger("requests").setLevel(logging.WARNING)
    logging.getLogger("urllib3").setLevel(logging.WARNING)

NEW_GAMES_DIR = "New_Static_Games"
PROCESSED_DIR = "Processed_Static_Games"
ERRORED_DIR = "Errored_Static_Games"
# --- ДОБАВЛЕНО: константа для расширений, чтобы избежать дублирования ---
ALLOWED_IMAGE_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp')


def process_single_game(game_folder_path, image_processor, ocr, llm, uploader, authors_list, tags_list):
    """
    Полный цикл обработки одной игры: ImageProcessing -> OCR -> LLM -> Tag Correction -> Upload.
    """
    game_name = os.path.basename(game_folder_path)
    logger.info(f"--- Processing game: {game_name} ---")
    
    temp_processing_path = None
    try:
        # --- ШАГ 0: Считаем количество страниц в исходной папке ---
        page_count = len([f for f in os.listdir(game_folder_path) if f.lower().endswith(ALLOWED_IMAGE_EXTENSIONS)])
        logger.info(f"Detected {page_count} pages in source folder.")
        # ---------------------------------------------------------

        # 1. ОБРАБОТКА ИЗОБРАЖЕНИЙ
        temp_processing_path, base64_placeholder = image_processor.process_game_folder(game_folder_path)
        if not temp_processing_path:
            logger.error(f"Image processing failed for '{game_name}'. Skipping.")
            return False

        # 2. Распознавание текста
        full_text = ocr.extract_text_from_folder(temp_processing_path)
        if not full_text:
            logger.error(f"Failed to extract text from '{game_name}'. Skipping.")
            return False

        # 3. Генерация JSON через LLM
        game_json = llm.generate_game_json(
            game_text=full_text,
            possible_title=game_name.replace('_', ' ').replace('-', ' '),
            authors_list=authors_list,
            tags_list=tags_list
        )
        if not game_json:
            logger.error(f"Failed to generate valid JSON from LLM for '{game_name}'. Skipping.")
            return False

        # --- ШАГ 3.5: АВТОМАТИЧЕСКАЯ УСТАНОВКА ТЕГА PLAYTIME ---
        playtime_tag = ""
        if page_count == 1:
            playtime_tag = "5min"
        elif 2 <= page_count <= 5:
            playtime_tag = "15min"
        elif 6 <= page_count <= 13:
            playtime_tag = "30min"
        else:  # 14+ pages
            playtime_tag = "60+min"
        
        logger.info(f"Automatically setting 'Playtime' tag to '{playtime_tag}' based on {page_count} pages.")
        
        # Удаляем любые старые теги времени и добавляем новый
        current_tags = game_json.get('tags', [])
        playtime_options = {"5min", "15min", "30min", "60+min"}
        filtered_tags = [tag for tag in current_tags if tag not in playtime_options]
        filtered_tags.append(playtime_tag)
        
        game_json['tags'] = filtered_tags
        logger.info(f"Final tags for upload: {game_json['tags']}")
        # ----------------------------------------------------------

        # 4. Загрузка игры в каталог
        uploader.upload_game(game_json, temp_processing_path, base64_placeholder)
        logger.info(f"Successfully uploaded '{game_name}' to the catalog.")
        return True
    
    except Exception as e:
        logger.error(f"An error occurred in the processing pipeline for '{game_name}': {e}", exc_info=True)
        return False
    
    finally:
        if temp_processing_path and os.path.exists(temp_processing_path):
            shutil.rmtree(temp_processing_path)
            logger.info(f"Cleaned up temporary directory: {temp_processing_path}")


def main():
    """Главная функция-оркестратор."""
    load_dotenv()
    setup_logging()
    
    logger.info("==============================================")
    logger.info("=== CYOA Static Game Processor v1.0 Started ===")
    logger.info("==============================================")

    for dir_path in [NEW_GAMES_DIR, PROCESSED_DIR, ERRORED_DIR]:
        os.makedirs(dir_path, exist_ok=True)

    try:
        api_helper = ApiHelper()
        if not api_helper.login():
            logger.critical("API login failed. Check EMAIL/PASSWORD in .env. Aborting.")
            return

        image_processor = ImageProcessor()
        ocr_extractor = OCRExtractor()
        llm_handler = LLMHandler()
        game_uploader = GameUploader(api_helper)
    except Exception as e:
        logger.critical(f"Failed to initialize components: {e}", exc_info=True)
        return
        
    authors_list_str = api_helper.get_authors_list_str()
    tags_list_json = api_helper.get_tags_list_json()
    if not authors_list_str or not tags_list_json:
        logger.error("Could not fetch authors or tags list. Aborting.")
        return

    games_to_process = [d.path for d in os.scandir(NEW_GAMES_DIR) if d.is_dir()]
    
    if not games_to_process:
        logger.info("No new game folders found in 'New_Static_Games'. Exiting.")
        return

    logger.info(f"Found {len(games_to_process)} game(s) to process.")

    for game_path in tqdm(games_to_process, desc="Overall Progress"):
        try:
            success = process_single_game(
                game_path, image_processor, ocr_extractor, llm_handler, game_uploader, authors_list_str, tags_list_json
            )
            
            destination_dir = PROCESSED_DIR if success else ERRORED_DIR
            shutil.move(game_path, os.path.join(destination_dir, os.path.basename(game_path)))
            logger.info(f"Moved source folder '{os.path.basename(game_path)}' to '{destination_dir}'.")

        except Exception as e:
            logger.critical(f"An unhandled exception occurred while processing {os.path.basename(game_path)}: {e}", exc_info=True)
            try:
                shutil.move(game_path, os.path.join(ERRORED_DIR, os.path.basename(game_path)))
                logger.info(f"Moved '{os.path.basename(game_path)}' to '{ERRORED_DIR}' due to critical failure.")
            except Exception as move_err:
                logger.error(f"Could not even move the errored folder: {move_err}")
    
    logger.info("==========================================")
    logger.info("=== Processing finished. See logs above. ===")
    logger.info("==========================================")


if __name__ == "__main__":
    main()