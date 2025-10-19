import os
import sys
import shutil
import logging
import json
from dotenv import load_dotenv
from tqdm import tqdm

# Импортируем наши компоненты
from components.ocr_extractor import OCRExtractor
from components.api_helper import ApiHelper
from components.llm_handler import LLMHandler
from components.game_uploader import GameUploader

# --- ИСПРАВЛЕНО: Определяем logger на уровне модуля ---
# Теперь переменная logger будет доступна во всех функциях этого файла.
logger = logging.getLogger(__name__)
# ----------------------------------------------------

# --- Настройка логирования ---
def setup_logging():
    os.makedirs("logs", exist_ok=True)
    log_formatter = logging.Formatter('%(asctime)s - %(levelname)s - [%(filename)s:%(lineno)d] - %(message)s')
    
    # Логи в файл
    file_handler = logging.FileHandler("logs/processing.log", encoding='utf-8')
    file_handler.setFormatter(log_formatter)
    
    # Логи в консоль
    stream_handler = logging.StreamHandler(sys.stdout)
    stream_handler.setFormatter(log_formatter)
    
    # --- ИСПРАВЛЕНО: Мы не создаем новый логгер, а настраиваем существующий ---
    # Получаем корневой логгер, чтобы настроить его
    root_logger = logging.getLogger()
    root_logger.setLevel(logging.INFO)
    
    # Очищаем предыдущие обработчики, если они есть, чтобы избежать дублирования логов
    if root_logger.hasHandlers():
        root_logger.handlers.clear()
        
    root_logger.addHandler(file_handler)
    root_logger.addHandler(stream_handler)
    # -------------------------------------------------------------------------
    
    # Отключаем слишком "болтливые" логгеры от сторонних библиотек
    logging.getLogger("google.auth.transport.requests").setLevel(logging.WARNING)
    logging.getLogger("urllib3.connectionpool").setLevel(logging.WARNING)
    logging.getLogger("requests").setLevel(logging.WARNING)
    logging.getLogger("urllib3").setLevel(logging.WARNING)


# --- Константы ---
NEW_GAMES_DIR = "New_Static_Games"
PROCESSED_DIR = "Processed_Static_Games"
ERRORED_DIR = "Errored_Static_Games"

def process_single_game(game_folder_path, ocr, llm, uploader, authors_list, tags_list):
    """
    Полный цикл обработки одной игры: OCR -> LLM -> Upload.
    Возвращает True в случае успеха, False в случае ошибки.
    """
    game_name = os.path.basename(game_folder_path)
    logger.info(f"--- Processing game: {game_name} ---")

    # 1. Распознавание текста
    full_text = ocr.extract_text_from_folder(game_folder_path)
    if not full_text:
        logger.error(f"Failed to extract text from '{game_name}'. Skipping.")
        return False

    # 2. Генерация JSON через LLM
    game_json = llm.generate_game_json(
        game_text=full_text,
        possible_title=game_name.replace('_', ' ').replace('-', ' '),
        authors_list=authors_list,
        tags_list=tags_list
    )
    if not game_json:
        logger.error(f"Failed to generate valid JSON from LLM for '{game_name}'. Skipping.")
        return False

    # 3. Загрузка игры в каталог
    try:
        uploader.upload_game(game_json, game_folder_path)
        logger.info(f"Successfully uploaded '{game_name}' to the catalog.")
        return True
    except Exception as e:
        logger.error(f"Failed to upload game '{game_name}': {e}", exc_info=True)
        return False


def main():
    """Главная функция-оркестратор."""
    load_dotenv()
    setup_logging()
    
    logger.info("==============================================")
    logger.info("=== CYOA Static Game Processor v1.0 Started ===")
    logger.info("==============================================")

    # Создаем необходимые директории
    for dir_path in [NEW_GAMES_DIR, PROCESSED_DIR, ERRORED_DIR]:
        os.makedirs(dir_path, exist_ok=True)

    # Инициализация компонентов
    try:
        api_helper = ApiHelper()
        if not api_helper.login():
            logger.critical("API login failed. Check EMAIL/PASSWORD in .env. Aborting.")
            return

        ocr_extractor = OCRExtractor()
        llm_handler = LLMHandler()
        game_uploader = GameUploader(api_helper)
    except Exception as e:
        logger.critical(f"Failed to initialize components: {e}", exc_info=True)
        return
        
    # Получаем списки тегов и авторов один раз для экономии времени
    authors_list_str = api_helper.get_authors_list_str()
    tags_list_json = api_helper.get_tags_list_json()
    if not authors_list_str or not tags_list_json:
        logger.error("Could not fetch authors or tags list. Aborting.")
        return

    # Ищем папки с играми для обработки
    games_to_process = [d.path for d in os.scandir(NEW_GAMES_DIR) if d.is_dir()]
    
    if not games_to_process:
        logger.info("No new game folders found in 'New_Static_Games'. Exiting.")
        return

    logger.info(f"Found {len(games_to_process)} game(s) to process.")

    # Основной цикл обработки
    for game_path in tqdm(games_to_process, desc="Overall Progress"):
        try:
            success = process_single_game(
                game_path, ocr_extractor, llm_handler, game_uploader, authors_list_str, tags_list_json
            )
            
            # Перемещаем папку в зависимости от результата
            destination_dir = PROCESSED_DIR if success else ERRORED_DIR
            shutil.move(game_path, os.path.join(destination_dir, os.path.basename(game_path)))
            logger.info(f"Moved '{os.path.basename(game_path)}' to '{destination_dir}'.")

        except Exception as e:
            logger.critical(f"An unhandled exception occurred while processing {os.path.basename(game_path)}: {e}", exc_info=True)
            # Перемещаем в папку с ошибками в случае критического сбоя
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