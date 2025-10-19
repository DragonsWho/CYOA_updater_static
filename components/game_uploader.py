import os
import requests
import logging
from dotenv import load_dotenv
from .api_helper import ApiHelper

load_dotenv()
logger = logging.getLogger(__name__)

class GameUploader:
    def __init__(self, api_helper: ApiHelper):
        self.api_helper = api_helper
        self.base_url = api_helper.base_url
        self.token = api_helper.token
        self.authors_cache = {}
        self.tags_cache = {}

    def _load_caches(self):
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
        cache = self.authors_cache if entity_type == 'authors' else self.tags_cache
        name_lower = name.lower()

        if name_lower in cache:
            return cache[name_lower]
        
        logger.info(f"Creating new {entity_type[:-1]}: {name}")
        try:
            headers = {'Authorization': self.token}
            response = requests.post(
                f'{self.base_url}/collections/{entity_type}/records',
                headers=headers, json={'name': name}
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
        category_id = "phc2n4pqe7hxe36"
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
                    headers=headers, json={'tags': current_tags}
                )
                res_patch.raise_for_status()
                logger.info(f"Successfully added tag {tag_id} to 'Custom' category.")
        except Exception as e:
            logger.error(f"Failed to add tag to category: {e}")

    def upload_game(self, game_data: dict, processed_folder_path: str, base64_placeholder: str | None):
        if not self.authors_cache or not self.tags_cache:
            self._load_caches()

        logger.info(f"Preparing to upload game: '{game_data['title']}'")
        
        author_ids = [self._get_or_create_entity(name, 'authors') for name in game_data.get('author', ['Anonymous'])]
        tag_ids = [self._get_or_create_entity(name, 'tags') for name in game_data.get('tags', [])]

        form_data = {
            'title': game_data['title'],
            'description': game_data['description'],
            'img_or_link': 'img',
            'uploader': "mar1q123caruaaw",
            'authors': [id for id in author_ids if id],
            'tags': [id for id in tag_ids if id],
        }
        
        if base64_placeholder:
            form_data['image_base64'] = base64_placeholder
            logger.info("Attaching base64 placeholder to the upload request.")

        # --- ИЗМЕНЕНО: Ищем обложку и страницы раздельно ---
        all_files = sorted(os.listdir(processed_folder_path))
        
        cover_filename = next((f for f in all_files if f.startswith('cover_')), None)
        if not cover_filename:
            raise FileNotFoundError("Processed cover file (starting with 'cover_') not found.")

        # Страницы - это все файлы, НЕ начинающиеся с 'cover_'
        page_filenames = [f for f in all_files if not f.startswith('cover_')]
        if not page_filenames:
            raise FileNotFoundError("No processed page files found.")
        
        cover_image_path = os.path.join(processed_folder_path, cover_filename)
        logger.info(f"Found cover: {cover_filename}")
        logger.info(f"Found {len(page_filenames)} pages to upload.")
        # -----------------------------------------------------------
        
        open_files = [] 
        try:
            cover_file = open(cover_image_path, 'rb')
            open_files.append(cover_file)
            
            page_files_for_upload = []
            for page_filename in page_filenames:
                page_path = os.path.join(processed_folder_path, page_filename)
                handle = open(page_path, 'rb')
                open_files.append(handle)
                page_files_for_upload.append(('cyoa_pages', (page_filename, handle)))
            
            headers = {'Authorization': self.token}
            logger.info(f"Sending POST request to create game record...")
            
            final_files = [('image', (cover_filename, cover_file))] + page_files_for_upload
            
            response = requests.post(
                f'{self.base_url}/collections/games/records',
                headers=headers, data=form_data, files=final_files
            )
            
            logger.debug(f"API Response [{response.status_code}]: {response.text}")
            response.raise_for_status()
            
            logger.info(f"Game '{game_data['title']}' uploaded successfully!")
            return response.json()

        finally:
            for f in open_files:
                f.close()