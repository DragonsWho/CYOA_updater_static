import os
import sys
import shutil
import logging
import json
from typing import Optional, Dict, Any, List
from dotenv import load_dotenv
from tqdm import tqdm
from rapidfuzz import fuzz

from components.ocr_extractor import OCRExtractor
from components.api_helper import ApiHelper
from components.llm_handler import LLMHandler
from components.game_uploader import GameUploader
from components.image_processor import ImageProcessor, RequiresManualSplitException

logger = logging.getLogger(__name__)

# --- КОНСТАНТЫ ---
NEW_GAMES_DIR = "New_Static_Games"
PROCESSED_DIR = "Processed_Static_Games"
ERRORED_DIR = "Errored_Static_Games"
ALREADY_EXISTS_DIR = "Already_Exists"
ALLOWED_IMAGE_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp')

# --- КЛАСС ДЛЯ ХРАНЕНИЯ КОНТЕКСТА ОТЛОЖЕННОЙ ИГРЫ ---
class DeferredGameContext:
    def __init__(self, game_path, temp_path=None, game_json=None, base64_placeholder=None, similar_titles=None):
        self.game_path = game_path
        self.temp_path = temp_path
        self.game_json = game_json
        self.base64_placeholder = base64_placeholder
        self.similar_titles = similar_titles or []

def setup_logging():
    # (Логирование без изменений)
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


def process_single_game(
    game_path: str, 
    api_helper, 
    image_processor, 
    ocr, 
    llm, 
    uploader, 
    authors_list, 
    tags_list, 
    all_game_titles,
    allow_manual_split: bool = False,   # Разрешить сплиттер?
    allow_user_prompt: bool = False,    # Разрешить вопрос "загружать ли?"
    precalc_context: DeferredGameContext = None # Если данные уже есть (из очереди подтверждения)
) -> tuple[str, Optional[DeferredGameContext]]:
    """
    Возвращает кортеж: (status, DeferredGameContext)
    Status: 'success', 'error', 'skipped', 'deferred_split', 'deferred_approval'
    """
    game_name = os.path.basename(game_path)
    logger.info(f"--- Processing game: {game_name} [Split:{allow_manual_split}, Prompt:{allow_user_prompt}] ---")
    
    # Если данные переданы из очереди подтверждения, используем их, иначе None
    temp_processing_path = precalc_context.temp_path if precalc_context else None
    base64_placeholder = precalc_context.base64_placeholder if precalc_context else None
    game_json = precalc_context.game_json if precalc_context else None

    try:
        # --- ШАГ 1: ОБРАБОТКА ИЗОБРАЖЕНИЙ (если еще не сделано) ---
        if not temp_processing_path:
            try:
                # Передаем allow_manual_split. Если False и картинка длинная -> выбросит RequiresManualSplitException
                temp_processing_path, base64_placeholder = image_processor.process_game_folder(
                    game_path, 
                    allow_manual_split=allow_manual_split
                )
            except RequiresManualSplitException:
                logger.info(f"Game '{game_name}' deferred due to long images.")
                return 'deferred_split', DeferredGameContext(game_path)
            
            if not temp_processing_path:
                return 'error', None

        # --- ШАГ 2: OCR и LLM (если еще не сделано) ---
        if not game_json:
            full_text = ocr.extract_text_from_folder(temp_processing_path)
            if not full_text:
                shutil.rmtree(temp_processing_path)
                return 'error', None

            game_json = llm.generate_game_json(
                game_text=full_text,
                possible_title=game_name.replace('_', ' ').replace('-', ' '),
                authors_list=authors_list,
                tags_list=tags_list
            )
            if not game_json or 'title' not in game_json:
                shutil.rmtree(temp_processing_path)
                return 'error', None
            
            # Добавляем тег времени
            page_count = len([f for f in os.listdir(game_path) if f.lower().endswith(ALLOWED_IMAGE_EXTENSIONS)])
            playtime_tag = "5min" if page_count == 1 else "15min" if page_count <= 5 else "30min" if page_count <= 13 else "60+min"
            current_tags = game_json.get('tags', [])
            current_tags = [t for t in current_tags if t not in {"5min", "15min", "30min", "60+min"}]
            current_tags.append(playtime_tag)
            game_json['tags'] = current_tags

        title_to_check = game_json.get('title')

        # --- ШАГ 3: ПРОВЕРКА НА ДУБЛИКАТЫ ---
        
        # 3.1 Точное совпадение
        if api_helper.check_game_exists_by_title(title_to_check):
            logger.info(f"Exact match found for '{title_to_check}'. Skipping.")
            if temp_processing_path: shutil.rmtree(temp_processing_path)
            return 'skipped', None
        
        # 3.2 Нечеткое сравнение
        SIMILARITY_THRESHOLD = 85
        similar_titles = []
        for existing_title in all_game_titles:
            score = fuzz.token_set_ratio(title_to_check, existing_title)
            if score >= SIMILARITY_THRESHOLD:
                similar_titles.append(f"'{existing_title}' ({score}%)")
        
        if similar_titles:
            # Если prompt запрещен (автоматический режим) -> Откладываем в очередь подтверждения
            if not allow_user_prompt:
                logger.info(f"Similar titles found for '{game_name}'. Deferring for approval.")
                # ВОЗВРАЩАЕМ КОНТЕКСТ (чтобы не делать OCR заново и не удалять temp папку!)
                ctx = DeferredGameContext(
                    game_path=game_path,
                    temp_path=temp_processing_path,
                    game_json=game_json,
                    base64_placeholder=base64_placeholder,
                    similar_titles=similar_titles
                )
                return 'deferred_approval', ctx
            
            # Если prompt разрешен (мы уже в конце очереди) -> Спрашиваем
            YELLOW = '\033[93m'
            RESET = '\033[0m'
            print(f"\n{YELLOW}!!! ПОДТВЕРЖДЕНИЕ: Найдены похожие названия !!!{RESET}")
            print(f"  Игра: '{title_to_check}' (Папка: {game_name})")
            print(f"  Похожие в БД:")
            for s in similar_titles:
                print(f"    - {s}")
            
            while True:
                user_input = input(f"  Загрузить игру? (y/n): ").lower()
                if user_input in ['y', 'yes']:
                    break 
                elif user_input in ['n', 'no']:
                    if temp_processing_path: shutil.rmtree(temp_processing_path)
                    return 'skipped', None
                else:
                    print("  Введите 'y' или 'n'.")

        # --- ШАГ 4: ЗАГРУЗКА ---
        uploader.upload_game(game_json, temp_processing_path, base64_placeholder)
        logger.info(f"Successfully uploaded '{game_name}'.")
        all_game_titles.append(title_to_check)
        
        # Чистим temp
        if temp_processing_path and os.path.exists(temp_processing_path):
            shutil.rmtree(temp_processing_path)
            
        return 'success', None
    
    except Exception as e:
        logger.error(f"Error processing '{game_name}': {e}", exc_info=True)
        if temp_processing_path and os.path.exists(temp_processing_path):
            shutil.rmtree(temp_processing_path)
        return 'error', None


def main():
    load_dotenv()
    setup_logging()
    
    logger.info("=== CYOA Static Game Processor (Queue Mode) Started ===")

    # Инициализация (как и раньше)
    try:
        api_helper = ApiHelper()
        if not api_helper.login(): return
        image_processor = ImageProcessor()
        ocr_extractor = OCRExtractor()
        llm_handler = LLMHandler()
        game_uploader = GameUploader(api_helper)
    except Exception as e:
        logger.critical(f"Init failed: {e}")
        return
        
    authors_list = api_helper.get_authors_list_str()
    tags_list = api_helper.get_tags_list_json()
    all_game_titles = api_helper.get_all_game_titles()
    
    # Собираем список игр
    all_game_paths = [d.path for d in os.scandir(NEW_GAMES_DIR) if d.is_dir()]
    if not all_game_paths:
        logger.info("No games found.")
        return

    # Очереди
    deferred_splits: List[DeferredGameContext] = []
    deferred_approvals: List[DeferredGameContext] = []

    # --- ПРОХОД 1: ПОЛНЫЙ АВТОМАТ ---
    logger.info(f"\n>>> PASS 1: Automatic processing of {len(all_game_paths)} games...")
    
    for game_path in tqdm(all_game_paths, desc="Auto Pass"):
        status, ctx = process_single_game(
            game_path, api_helper, image_processor, ocr_extractor, llm_handler, game_uploader, 
            authors_list, tags_list, all_game_titles,
            allow_manual_split=False, # Запрещаем сплит
            allow_user_prompt=False   # Запрещаем вопросы
        )
        
        if status == 'success':
            shutil.move(game_path, os.path.join(PROCESSED_DIR, os.path.basename(game_path)))
        elif status == 'skipped':
            shutil.move(game_path, os.path.join(ALREADY_EXISTS_DIR, os.path.basename(game_path)))
        elif status == 'error':
            shutil.move(game_path, os.path.join(ERRORED_DIR, os.path.basename(game_path)))
        elif status == 'deferred_split':
            deferred_splits.append(ctx) # Добавляем в очередь на нарезку
        elif status == 'deferred_approval':
            deferred_approvals.append(ctx) # Добавляем в очередь на подтверждение

    # --- ПРОХОД 2: РУЧНАЯ НАРЕЗКА ---
    if deferred_splits:
        logger.info(f"\n>>> PASS 2: Processing {len(deferred_splits)} games requiring manual splitting...")
        print("\n" + "="*60)
        print("ВНИМАНИЕ: Сейчас будут открываться окна для нарезки изображений.")
        print("Выполните нарезку, чтобы продолжить обработку.")
        print("="*60 + "\n")
        
        for ctx in deferred_splits:
            status, new_ctx = process_single_game(
                ctx.game_path, api_helper, image_processor, ocr_extractor, llm_handler, game_uploader, 
                authors_list, tags_list, all_game_titles,
                allow_manual_split=True,  # Разрешаем сплит (откроет браузер)
                allow_user_prompt=False   # Все еще запрещаем вопросы про дубли (скинем их в approve queue)
            )
            
            game_path = ctx.game_path
            if status == 'success':
                shutil.move(game_path, os.path.join(PROCESSED_DIR, os.path.basename(game_path)))
            elif status == 'deferred_approval':
                deferred_approvals.append(new_ctx) # Если после нарезки нашли дубль - в конец очереди
            elif status == 'skipped':
                shutil.move(game_path, os.path.join(ALREADY_EXISTS_DIR, os.path.basename(game_path)))
            else:
                shutil.move(game_path, os.path.join(ERRORED_DIR, os.path.basename(game_path)))

    # --- ПРОХОД 3: ПОДТВЕРЖДЕНИЯ (ФИНАЛ) ---
    if deferred_approvals:
        logger.info(f"\n>>> PASS 3: Pending approval for {len(deferred_approvals)} games...")
        print("\n" + "="*60)
        print("ВНИМАНИЕ: Требуется ваше решение по следующим играм.")
        print("="*60 + "\n")
        
        for ctx in deferred_approvals:
            # Здесь передаем precalc_context=ctx, чтобы не делать работу заново
            status, _ = process_single_game(
                ctx.game_path, api_helper, image_processor, ocr_extractor, llm_handler, game_uploader, 
                authors_list, tags_list, all_game_titles,
                allow_manual_split=True,
                allow_user_prompt=True,   # Разрешаем спрашивать пользователя!
                precalc_context=ctx       # Используем готовый JSON и Temp path
            )
            
            game_path = ctx.game_path
            if status == 'success':
                shutil.move(game_path, os.path.join(PROCESSED_DIR, os.path.basename(game_path)))
            elif status == 'skipped':
                shutil.move(game_path, os.path.join(ALREADY_EXISTS_DIR, os.path.basename(game_path)))
            else:
                shutil.move(game_path, os.path.join(ERRORED_DIR, os.path.basename(game_path)))

    logger.info("=== All Queues Processed. Exiting. ===")

if __name__ == "__main__":
    main()