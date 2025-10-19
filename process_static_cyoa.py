# process_static_cyoa.py

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
ALREADY_EXISTS_DIR = "Already_Exists" # --- ДОБАВЛЕНО: Новая папка ---
ALLOWED_IMAGE_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp')


# --- ИЗМЕНЕНО: Добавлен api_helper и возвращаемое значение ---
def process_single_game(game_folder_path, api_helper, image_processor, ocr, llm, uploader, authors_list, tags_list) -> str:
    """
    Полный цикл обработки одной игры.
    Возвращает статус: 'success', 'skipped', 'error'.
    """
    game_name = os.path.basename(game_folder_path)
    logger.info(f"--- Processing game: {game_name} ---")
    
    temp_processing_path = None
    try:
        page_count = len([f for f in os.listdir(game_folder_path) if f.lower().endswith(ALLOWED_IMAGE_EXTENSIONS)])
        logger.info(f"Detected {page_count} pages in source folder.")

        # 1. ОБРАБОТКА ИЗОБРАЖЕНИЙ
        temp_processing_path, base64_placeholder = image_processor.process_game_folder(game_folder_path)
        if not temp_processing_path:
            logger.error(f"Image processing failed for '{game_name}'. Skipping.")
            return 'error'

        # 2. Распознавание текста
        full_text = ocr.extract_text_from_folder(temp_processing_path)
        if not full_text:
            logger.error(f"Failed to extract text from '{game_name}'. Skipping.")
            return 'error'

        # 3. Генерация JSON через LLM
        game_json = llm.generate_game_json(
            game_text=full_text,
            possible_title=game_name.replace('_', ' ').replace('-', ' '),
            authors_list=authors_list,
            tags_list=tags_list
        )
        if not game_json:
            logger.error(f"Failed to generate valid JSON from LLM for '{game_name}'. Skipping.")
            return 'error'
        
        # --- НОВЫЙ ШАГ: ПРОВЕРКА НА СУЩЕСТВОВАНИЕ ---
        title_to_check = game_json.get('title')
        if not title_to_check:
            logger.error(f"LLM did not provide a title for '{game_name}'. Skipping.")
            return 'error'
            
        if api_helper.check_game_exists_by_title(title_to_check):
            # Если игра существует, прекращаем обработку и возвращаем статус 'skipped'
            return 'skipped'
        # ----------------------------------------------

        # 3.5. АВТОМАТИЧЕСКАЯ УСТАНОВКА ТЕГА PLAYTIME
        playtime_tag = ""
        if page_count == 1:
            playtime_tag = "5min"
        elif 2 <= page_count <= 5:
            playtime_tag = "15min"
        elif 6 <= page_count <= 13:
            playtime_tag = "30min"
        else:
            playtime_tag = "60+min"
        
        logger.info(f"Automatically setting 'Playtime' tag to '{playtime_tag}' based on {page_count} pages.")
        
        current_tags = game_json.get('tags', [])
        playtime_options = {"5min", "15min", "30min", "60+min"}
        filtered_tags = [tag for tag in current_tags if tag not in playtime_options]
        filtered_tags.append(playtime_tag)
        
        game_json['tags'] = filtered_tags
        logger.info(f"Final tags for upload: {game_json['tags']}")

        # 4. Загрузка игры в каталог
        uploader.upload_game(game_json, temp_processing_path, base64_placeholder)
        logger.info(f"Successfully uploaded '{game_name}' to the catalog.")
        return 'success'
    
    except Exception as e:
        logger.error(f"An error occurred in the processing pipeline for '{game_name}': {e}", exc_info=True)
        return 'error'
    
    finally:
        if temp_processing_path and os.path.exists(temp_processing_path):
            shutil.rmtree(temp_processing_path)
            logger.info(f"Cleaned up temporary directory: {temp_processing_path}")


def main():
    """Главная функция-оркестратор."""
    load_dotenv()
    setup_logging()
    
    logger.info("==============================================")
    logger.info("=== CYOA Static Game Processor v1.1 Started ===") # Версия обновлена
    logger.info("==============================================")

    # --- ИЗМЕНЕНО: Добавлена новая папка ---
    for dir_path in [NEW_GAMES_DIR, PROCESSED_DIR, ERRORED_DIR, ALREADY_EXISTS_DIR]:
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
            # --- ИЗМЕНЕНО: передаем api_helper и получаем статус ---
            status = process_single_game(
                game_path, api_helper, image_processor, ocr_extractor, llm_handler, game_uploader, authors_list_str, tags_list_json
            )
            
            # --- ИЗМЕНЕНО: Логика перемещения папки ---
            destination_dir = None
            if status == 'success':
                destination_dir = PROCESSED_DIR
                log_message = f"Moved source folder '{os.path.basename(game_path)}' to '{destination_dir}'."
            elif status == 'skipped':
                destination_dir = ALREADY_EXISTS_DIR
                log_message = f"Game already exists. Moved source folder '{os.path.basename(game_path)}' to '{destination_dir}'."
            else: # 'error' или любой другой случай
                destination_dir = ERRORED_DIR
                log_message = f"Error processing. Moved source folder '{os.path.basename(game_path)}' to '{destination_dir}'."
            
            shutil.move(game_path, os.path.join(destination_dir, os.path.basename(game_path)))
            logger.info(log_message)

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