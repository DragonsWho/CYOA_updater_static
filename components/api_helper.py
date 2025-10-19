import os
import json
import requests
import logging
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

class ApiHelper:
    def __init__(self):
        self.base_url = 'https://cyoa.cafe/api'
        self.email = os.getenv('EMAIL')
        self.password = os.getenv('PASSWORD')
        self.token = None

    def login(self):
        """Аутентификация с API и сохранение токена."""
        logger.info("Attempting to log into cyoa.cafe API...")
        try:
            response = requests.post(
                f'{self.base_url}/collections/users/auth-with-password',
                json={'identity': self.email, 'password': self.password}
            )
            response.raise_for_status()
            self.token = response.json()['token']
            logger.info("API login successful.")
            return True
        except requests.exceptions.RequestException as e:
            logger.error(f"API login failed: {e}")
            return False

    def _get_all_records(self, collection_name: str):
        """Вспомогательная функция для получения всех записей из коллекции с пагинацией."""
        if not self.token:
            raise Exception("Not authenticated. Call login() first.")
        
        headers = {'Authorization': self.token}
        all_items = []
        page = 1
        per_page = 500  # Увеличим для скорости
        
        while True:
            response = requests.get(
                f'{self.base_url}/collections/{collection_name}/records',
                headers=headers,
                params={'page': page, 'perPage': per_page}
            )
            response.raise_for_status()
            data = response.json()
            items_chunk = data.get('items', [])
            all_items.extend(items_chunk)
            
            if len(items_chunk) < per_page:
                break
            page += 1
        return all_items

    def get_authors_list_str(self) -> str:
        """Получает всех авторов и возвращает отсортированный список в виде строки."""
        logger.info("Fetching authors list...")
        try:
            authors_data = self._get_all_records('authors')
            author_names = sorted([author['name'] for author in authors_data])
            logger.info(f"Fetched {len(author_names)} authors.")
            return ", ".join(author_names)
        except Exception as e:
            logger.error(f"Failed to get authors list: {e}")
            return ""

    def get_tags_list_json(self) -> str:
        """Получает все теги и категории, возвращая их в виде JSON-строки."""
        logger.info("Fetching tags and categories list...")
        try:
            tags_data = self._get_all_records('tags')
            categories_data = self._get_all_records('tag_categories')
            
            tags_map = {tag['id']: tag['name'] for tag in tags_data}
            
            export_data = []
            for category in categories_data:
                tag_names = [tags_map[tag_id] for tag_id in category.get('tags', []) if tag_id in tags_map]
                if tag_names:
                    export_data.append({
                        'category_name': category['name'],
                        'tags': sorted(tag_names)
                    })
            
            logger.info(f"Fetched {len(categories_data)} tag categories.")
            return json.dumps(export_data, ensure_ascii=False, indent=2)
        except Exception as e:
            logger.error(f"Failed to get tags list: {e}")
            return "[]"