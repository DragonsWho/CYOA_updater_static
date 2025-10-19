import os
import re
import json
import requests
import logging
from dotenv import load_dotenv

load_dotenv()
logger = logging.getLogger(__name__)

class LLMHandler:
    def __init__(self):
        # --- ИЗМЕНЕНО: Используем переменные для OpenRouter ---
        self.api_key = os.getenv("OPENROUTER_API_KEY")
        self.model = os.getenv("OPENROUTER_MODEL", "anthropic/claude-3-haiku-20240307")
        self.site_url = os.getenv("YOUR_SITE_URL", "https://cyoa.cafe")
        self.app_name = os.getenv("YOUR_APP_NAME", "CYOA_Static_Processor")
        self.api_url = "https://openrouter.ai/api/v1/chat/completions"
        # --------------------------------------------------------

        self.prompt_template = self._load_prompt_template()

        if not self.api_key:
            raise ValueError("OPENROUTER_API_KEY is not set in the .env file.")

    def _load_prompt_template(self):
        prompt_path = "prompts/static_cyoa_catalog_prompt.md"
        try:
            with open(prompt_path, 'r', encoding='utf-8') as f:
                return f.read()
        except FileNotFoundError:
            logger.critical(f"Prompt template not found at {prompt_path}")
            raise
    
    def _clean_json_string(self, json_string: str) -> str:
        """Очищает строку, чтобы она стала валидным JSON."""
        # Убираем обертки ```json ... ```
        cleaned = re.sub(r'```json\s*([\s\S]*?)\s*```', r'\1', json_string, flags=re.DOTALL)
        # Убираем однострочные комментарии //
        cleaned = re.sub(r'//.*', '', cleaned)
        # Убираем висящие запятые перед } и ]
        cleaned = re.sub(r',\s*([\}\]])', r'\1', cleaned)
        return cleaned.strip()

    def generate_game_json(self, game_text: str, possible_title: str, authors_list: str, tags_list: str) -> dict | None:
        """Генерирует JSON с описанием игры, отправляя запрос к LLM."""
        
        full_prompt = self.prompt_template.format(
            POSSIBLE_TITLE=possible_title,
            AUTHORS_LIST=authors_list,
            TAGS_LIST=tags_list,
            GAME_TEXT=game_text
        )

        # --- ИЗМЕНЕНО: Заголовки для OpenRouter ---
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": self.site_url,
            "X-Title": self.app_name,
        }
        # ----------------------------------------
        
        payload = {
            "model": self.model,
            "messages": [{"role": "user", "content": full_prompt}]
        }

        logger.info(f"Sending request to OpenRouter (model: {self.model}). Prompt length: {len(full_prompt)}")
        
        try:
            response = requests.post(self.api_url, headers=headers, json=payload, timeout=240)
            response.raise_for_status()
            
            data = response.json()
            raw_content = data["choices"][0]["message"]["content"]
            
            logger.info("Received response from LLM. Cleaning and validating JSON.")
            cleaned_content = self._clean_json_string(raw_content)

            try:
                game_data = json.loads(cleaned_content)
                if not game_data.get("title") or len(game_data.get("description", "")) < 20:
                    logger.error("LLM response is too short or invalid. Might be a refusal to answer.")
                    logger.debug(f"Invalid data received: {game_data}")
                    return None
                
                logger.info(f"Successfully generated and validated JSON for '{game_data.get('title')}'")
                return game_data
            except json.JSONDecodeError as e:
                logger.error(f"Failed to decode JSON from LLM response: {e}")
                logger.debug(f"--- Raw response ---\n{raw_content}")
                logger.debug(f"--- Cleaned response ---\n{cleaned_content}")
                return None

        except requests.exceptions.RequestException as e:
            logger.error(f"LLM API request failed: {e}")
            return None
        except (KeyError, IndexError) as e:
            logger.error(f"Invalid response structure from LLM API: {e}")
            logger.debug(f"--- Full API Response ---\n{response.text}")
            return None