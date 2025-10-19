import os
import requests
import logging
from dotenv import load_dotenv
from .api_helper import ApiHelper

# --- ИСПРАВЛЕНО: logger определен на уровне модуля ---
load_dotenv()
logger = logging.getLogger(__name__)
# ----------------------------------------------------

ALLOWED_IMAGE_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif')

class GameUploader:
    def __init__(self, api_helper: ApiHelper):
        self.api_helper = api_helper
        self.base_url = api_helper.base_url
        self.token = api_helper.token
        self.authors_cache = {}
        self.tags_cache = {}

    def _load_caches(self):
        """Загружает авторов и теги в кэш для быстрого доступа."""
        logger.info("Loading authors and tags into uploader cache.")
        try:
            authors = self.api_helper._get_all_records('authors')
            self.authors_cache = {author['name'].lower(): author['id'] for author in authors}
            
            tags = self.api_helper._get_all_records('tags')
            self.tags_cache = {tag['name'].lower(): tag['id'] for tag in tags}
            logger.info(f"Cached {len(self.authors_cache)} authors and {len(self.tags_cache)} tags.")
        except Exception as e:
            logger.error(f"Failed to load caches: {e}")
            raise

    def _get_or_create_entity(self, name: str, entity_type: str):
        """Создает или находит ID автора или тега."""
        cache = self.authors_cache if entity_type == 'authors' else self.tags_cache
        name_lower = name.lower()

        if name_lower in cache:
            return cache[name_lower]
        
        logger.info(f"Creating new {entity_type[:-1]}: {name}")
        try:
            headers = {'Authorization': self.token}
            response = requests.post(
                f'{self.base_url}/collections/{entity_type}/records',
                headers=headers,
                json={'name': name}
            )
            response.raise_for_status()
            new_entity = response.json()
            entity_id = new_entity['id']
            cache[name_lower] = entity_id
            
            if entity_type == 'tags':
                self._add_tag_to_custom_category(entity_id)

            logger.info(f"Created {entity_type[:-1]} '{name}' with ID: {entity_id}")
            return entity_id
        except Exception as e:
            logger.error(f"Error creating {entity_type[:-1]} '{name}': {e}")
            return None

    def _add_tag_to_custom_category(self, tag_id: str):
        """Добавляет тег в категорию 'Custom' (ID жестко задан)."""
        category_id = "phc2n4pqe7hxe36" # ID категории 'Custom'
        logger.info(f"Adding tag {tag_id} to 'Custom' category.")
        try:
            headers = {'Authorization': self.token}
            res = requests.get(f'{self.base_url}/collections/tag_categories/records/{category_id}', headers=headers)
            res.raise_for_status()
            current_tags = res.json().get('tags', [])
            
            if tag_id not in current_tags:
                current_tags.append(tag_id)
                res_patch = requests.patch(
                    f'{self.base_url}/collections/tag_categories/records/{category_id}',
                    headers=headers,
                    json={'tags': current_tags}
                )
                res_patch.raise_for_status()
                logger.info(f"Successfully added tag {tag_id} to 'Custom' category.")
        except Exception as e:
            logger.error(f"Failed to add tag to category: {e}")

    def upload_game(self, game_data: dict, game_folder_path: str):
        """Загружает игру, ее описание и изображения в каталог."""
        if not self.authors_cache or not self.tags_cache:
            self._load_caches()

        logger.info(f"Preparing to upload game: '{game_data['title']}'")
        
        author_ids = []
        for author_name in game_data.get('author', ['Anonymous']):
            author_id = self._get_or_create_entity(author_name, 'authors')
            if author_id:
                author_ids.append(author_id)
        
        tag_ids = []
        for tag_name in game_data.get('tags', []):
            tag_id = self._get_or_create_entity(tag_name, 'tags')
            if tag_id:
                tag_ids.append(tag_id)

        form_data = {
            'title': game_data['title'],
            'description': game_data['description'],
            'img_or_link': 'img',
            'uploader': "mar1q123caruaaw",
            'authors': author_ids,
            'tags': tag_ids,
        }
        
        image_files = sorted([f for f in os.listdir(game_folder_path) if f.lower().endswith(ALLOWED_IMAGE_EXTENSIONS)])
        if not image_files:
            raise FileNotFoundError(f"No images found in {game_folder_path} to upload.")
        
        cover_image_path = os.path.join(game_folder_path, image_files[0])

        files_to_upload = {}
        open_files = [] # Список для хранения открытых файловых дескрипторов
        try:
            cover_file = open(cover_image_path, 'rb')
            open_files.append(cover_file)
            files_to_upload['image'] = (os.path.basename(cover_image_path), cover_file)
            
            for i, page_filename in enumerate(image_files):
                page_path = os.path.join(game_folder_path, page_filename)
                handle = open(page_path, 'rb')
                open_files.append(handle)
                # PocketBase ожидает несколько полей с одинаковым именем
                files_to_upload[f'cyoa_pages[{i}]'] = (page_filename, handle)
            
            headers = {'Authorization': self.token}
            logger.info(f"Sending POST request to create game record...")
            
            # В requests для мульти-файлов нужно передавать список кортежей
            final_files = []
            for key, (filename, file_handle) in files_to_upload.items():
                if 'cyoa_pages' in key:
                    final_files.append(('cyoa_pages', (filename, file_handle)))
                else:
                    final_files.append((key, (filename, file_handle)))
            
            response = requests.post(
                f'{self.base_url}/collections/games/records',
                headers=headers,
                data=form_data,
                files=final_files
            )
            
            logger.debug(f"API Response [{response.status_code}]: {response.text}")
            response.raise_for_status()
            
            logger.info(f"Game '{game_data['title']}' uploaded successfully!")
            return response.json()

        finally:
            for f in open_files:
                f.close()