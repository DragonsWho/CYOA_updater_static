python3 -m venv venv
source venv/bin/activate



# README.md



## (RU) CYOA_UPDATER_STATIC: Автоматический загрузчик статичных CYOA

Этот проект представляет собой автоматизированный конвейер (pipeline) для обработки и загрузки статичных, основанных на изображениях, CYOA (Choose Your Own Adventure) на веб-сайт `cyoa.cafe`.

Скрипт берет папку с изображениями страниц CYOA, извлекает из них текст с помощью OCR, генерирует метаданные (название, описание, теги) с помощью LLM, оптимизирует изображения и загружает готовую игру в каталог сайта.

### 🚀 Основные возможности

-   **Автоматическая обработка**: Поместите папки с играми в `New_Static_Games` и запустите скрипт.
-   **Извлечение текста**: Использует Google Cloud Vision API для распознавания текста на изображениях.
-   **Генерация метаданных**: Отправляет распознанный текст в LLM (через OpenRouter) для автоматического создания названия, описания, подбора автора и тегов.
-   **Оптимизация изображений**: Автоматически конвертирует все изображения в формат WebP, создает и обрезает обложку, а также генерирует легковесный Base64 плейсхолдер.
-   **Интерактивное разделение**: Если изображение слишком высокое для загрузки, автоматически запускается утилита `manual_splitter.py`, позволяющая вручную разрезать его на части.
-   **Проверка дубликатов**: Перед загрузкой проверяет, не существует ли уже игра с таким же названием в базе данных.
-   **Организация результатов**: Автоматически перемещает обработанные папки в `Processed_Static_Games`, `Errored_Static_Games` или `Already_Exists` в зависимости от результата.

---

### 📂 Структура проекта

```
CYOA_UPDATER_STATIC/
│
├── 📁 Already_Exists/         # Папки с играми, которые уже существуют в каталоге.
├── 📁 components/             # Основные модули скрипта.
│   ├── api_helper.py         # Взаимодействие с API cyoa.cafe (логин, получение данных, проверка).
│   ├── game_uploader.py      # Логика загрузки игры и изображений.
│   ├── image_processor.py    # Обработка изображений (конвертация, обрезка, запуск сплиттера).
│   ├── llm_handler.py        # Взаимодействие с LLM через OpenRouter для генерации JSON.
│   └── ocr_extractor.py      # Распознавание текста с изображений через Google Cloud Vision.
│
├── 📁 Errored_Static_Games/   # Папки с играми, при обработке которых произошла ошибка.
├── 📁 logs/                   # Лог-файлы работы скрипта (processing.log).
├── 📁 New_Static_Games/       # ВХОДНАЯ ПАПКА: сюда нужно помещать новые игры для обработки.
├── 📁 Processed_Static_Games/ # Папки с играми, которые были успешно обработаны и загружены.
├── 📁 prompts/                # Шаблоны промптов для LLM.
├── 📁 templates/              # (Зарезервировано) Для возможных будущих HTML шаблонов.
├── 📁 venv/                   # Виртуальное окружение Python.
│
├── .env                      # Файл с вашими учетными данными и ключами API (НУЖНО СОЗДАТЬ).
├── .gitignore                # Файл для исключения из Git.
├── gcp-credentials.json      # Ключ сервисного аккаунта Google Cloud (НУЖНО ПОЛУЧИТЬ).
├── manual_splitter.py        # Вспомогательный скрипт для ручной нарезки высоких изображений.
├── process_static_cyoa.py    # ГЛАВНЫЙ СКРИПТ: его нужно запускать для старта обработки.
├── README.md                 # Этот файл.
└── requirements.txt          # Список зависимостей Python.
```

---

### 🛠️ Настройка и установка

#### 1. Клонирование репозитория
```bash
git clone <your-repository-url>
cd CYOA_UPDATER_STATIC
```

#### 2. Создание и активация виртуального окружения
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

#### 3. Установка зависимостей
```bash
pip install -r requirements.txt
```

#### 4. Конфигурация

Вам необходимо создать и настроить два файла с учетными данными:

**A) Файл `.env`**

Создайте файл `.env` в корневой папке проекта по следующему шаблону:

```env
# --- Учетные данные для cyoa.cafe API ---
EMAIL="your_email@example.com"
PASSWORD="your_password"

# --- Ключ API для OpenRouter.ai ---
OPENROUTER_API_KEY="sk-or-v1-..."

# --- Модель для генерации JSON (Claude 3 Haiku рекомендуется как быстрый и дешевый вариант) ---
OPENROUTER_MODEL="anthropic/claude-3-haiku-20240307"

# --- Данные для заголовков запроса к OpenRouter (можно не менять) ---
YOUR_SITE_URL="https://cyoa.cafe"
YOUR_APP_NAME="CYOA_Static_Processor"
```

**B) Учетные данные Google Cloud Platform**

Для работы OCR требуется ключ сервисного аккаунта Google Cloud с доступом к **Cloud Vision API**.

1.  [Создайте сервисный аккаунт](https://cloud.google.com/iam/docs/creating-managing-service-accounts) и скачайте JSON-ключ.
2.  Переименуйте скачанный файл в `gcp-credentials.json` и поместите его в корневую папку проекта.
3.  **Важно:** Установите переменную окружения, чтобы SDK мог найти этот файл.
    ```bash
    # Windows (в командной строке)
    set GOOGLE_APPLICATION_CREDENTIALS="C:\путь\к\вашему\проекту\CYOA_UPDATER_STATIC\gcp-credentials.json"
    
    # Windows (в PowerShell)
    $env:GOOGLE_APPLICATION_CREDENTIALS="C:\путь\к\вашему\проекту\CYOA_UPDATER_STATIC\gcp-credentials.json"

    # macOS / Linux
    export GOOGLE_APPLICATION_CREDENTIALS="/путь/к/вашему/проекту/CYOA_UPDATER_STATIC/gcp-credentials.json"
    ```
    Эту команду нужно выполнять в терминале каждый раз перед запуском скрипта, либо добавить ее в системные переменные окружения.

---

### 🎮 Как пользоваться

1.  **Подготовьте игру**: Создайте папку с названием игры (например, `My-Awesome-CYOA`) внутри директории `New_Static_Games`.
2.  **Добавьте изображения**: Поместите все изображения страниц CYOA в эту папку. Убедитесь, что файлы отсортированы в правильном порядке (например, `01.jpg`, `02.jpg`, `03.jpg`...). Первое изображение будет использовано как основа для обложки.
3.  **Запустите скрипт**: Откройте терминал в папке проекта (с активированным `venv`) и выполните команду:
    ```bash
    python process_static_cyoa.py
    ```
4.  **Следите за процессом**:
    -   Скрипт начнет обрабатывать каждую папку в `New_Static_Games`.
    -   Если одно из изображений окажется слишком высоким, **откроется отдельное окно** (`manual_splitter.py`). В этом окне вы сможете визуально разрезать изображение на несколько частей. Просто кликайте мышкой там, где должен быть разрез, и нажмите "Save and Exit", когда закончите. Если вы закроете это окно без сохранения, обработка игры прервется и она переместится в `Errored_Static_Games`.
    -   Подробный ход выполнения будет отображаться в консоли и записываться в файл `logs/processing.log`.
5.  **Проверьте результат**: После завершения работы исходная папка с игрой будет перемещена в одну из трех директорий:
    -   `Processed_Static_Games`: Игра успешно загружена.
    -   `Already_Exists`: Игра с таким названием уже есть на сайте.
    -   `Errored_Static_Games`: В процессе обработки произошла ошибка. Проверьте лог-файл для деталей.

<br>
<hr>
<br>

## (EN) CYOA_UPDATER_STATIC: Static CYOA Uploader

This project is an automated pipeline for processing and uploading static, image-based CYOA (Choose Your Own Adventure) games to the `cyoa.cafe` website.

The script takes a folder of CYOA page images, extracts text from them using OCR, generates metadata (title, description, tags) via an LLM, optimizes the images, and uploads the final game to the site's catalog.

### 🚀 Key Features

-   **Automated Processing**: Place game folders into `New_Static_Games` and run the script.
-   **Text Extraction**: Uses the Google Cloud Vision API to recognize text within images.
-   **Metadata Generation**: Sends the recognized text to an LLM (via OpenRouter) to automatically create a title, description, and select authors and tags.
-   **Image Optimization**: Automatically converts all images to the WebP format, creates and crops a cover, and generates a lightweight Base64 placeholder.
-   **Interactive Splitting**: If an image is too tall to be uploaded, the `manual_splitter.py` utility is automatically launched, allowing you to manually slice it into parts.
-   **Duplicate Check**: Before uploading, it verifies if a game with the same title already exists in the database.
-   **Result Organization**: Automatically moves processed folders to `Processed_Static_Games`, `Errored_Static_Games`, or `Already_Exists` depending on the outcome.

---

### 📂 Project Structure

```
CYOA_UPDATER_STATIC/
│
├── 📁 Already_Exists/         # Folders of games that already exist in the catalog.
├── 📁 components/             # Core script modules.
│   ├── api_helper.py         # Handles interaction with the cyoa.cafe API (login, data fetching, checks).
│   ├── game_uploader.py      # Logic for uploading the game and its images.
│   ├── image_processor.py    # Image processing (conversion, cropping, launching the splitter).
│   ├── llm_handler.py        # Interacts with an LLM via OpenRouter to generate JSON.
│   └── ocr_extractor.py      # Recognizes text from images using Google Cloud Vision.
│
├── 📁 Errored_Static_Games/   # Folders of games that failed during processing.
├── 📁 logs/                   # Log files from script execution (processing.log).
├── 📁 New_Static_Games/       # INPUT FOLDER: Place new games for processing here.
├── 📁 Processed_Static_Games/ # Folders of games that were successfully processed and uploaded.
├── 📁 prompts/                # Prompt templates for the LLM.
├── 📁 templates/              # (Reserved) For potential future HTML templates.
├── 📁 venv/                   # Python virtual environment.
│
├── .env                      # File for your credentials and API keys (MUST BE CREATED).
├── .gitignore                # Git ignore file.
├── gcp-credentials.json      # Google Cloud service account key (MUST BE OBTAINED).
├── manual_splitter.py        # Helper script for manually splitting tall images.
├── process_static_cyoa.py    # MAIN SCRIPT: Run this to start the processing.
├── README.md                 # This file.
└── requirements.txt          # List of Python dependencies.
```

---

### 🛠️ Setup and Installation

#### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd CYOA_UPDATER_STATIC
```

#### 2. Create and Activate a Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

#### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

#### 4. Configuration

You need to create and configure two credential files:

**A) The `.env` File**

Create a file named `.env` in the project's root directory using the following template:

```env
# --- Credentials for the cyoa.cafe API ---
EMAIL="your_email@example.com"
PASSWORD="your_password"

# --- API Key for OpenRouter.ai ---
OPENROUTER_API_KEY="sk-or-v1-..."

# --- Model for JSON generation (Claude 3 Haiku is recommended as a fast and cheap option) ---
OPENROUTER_MODEL="anthropic/claude-3-haiku-20240307"

# --- Data for OpenRouter request headers (can be left as is) ---
YOUR_SITE_URL="https://cyoa.cafe"
YOUR_APP_NAME="CYOA_Static_Processor"
```

**B) Google Cloud Platform Credentials**

The OCR functionality requires a Google Cloud service account key with access to the **Cloud Vision API**.

1.  [Create a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts) and download the JSON key.
2.  Rename the downloaded file to `gcp-credentials.json` and place it in the project's root directory.
3.  **Important:** Set an environment variable so the SDK can find this file.
    ```bash
    # Windows (in Command Prompt)
    set GOOGLE_APPLICATION_CREDENTIALS="C:\path\to\your\project\CYOA_UPDATER_STATIC\gcp-credentials.json"
    
    # Windows (in PowerShell)
    $env:GOOGLE_APPLICATION_CREDENTIALS="C:\path\to\your\project\CYOA_UPDATER_STATIC\gcp-credentials.json"

    # macOS / Linux
    export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/project/CYOA_UPDATER_STATIC/gcp-credentials.json"
    ```
    This command needs to be executed in your terminal session before running the script, or you can add it to your system's permanent environment variables.

---

### 🎮 How to Use

1.  **Prepare the Game**: Create a folder with the game's name (e.g., `My-Awesome-CYOA`) inside the `New_Static_Games` directory.
2.  **Add Images**: Place all CYOA page images into this folder. Ensure the files are sorted in the correct order (e.g., `01.jpg`, `02.jpg`, `03.jpg`...). The first image will be used as the base for the cover.
3.  **Run the Script**: Open a terminal in the project folder (with the `venv` activated) and execute the command:
    ```bash
    python process_static_cyoa.py
    ```
4.  **Monitor the Process**:
    -   The script will begin processing each folder in `New_Static_Games`.
    -   If one of the images is too tall, **a separate window** (`manual_splitter.py`) **will open**. In this window, you can visually slice the image into multiple parts. Simply click where you want to make a cut, and press "Save and Exit" when you are done. If you close this window without saving, the game's processing will be aborted, and it will be moved to `Errored_Static_Games`.
    -   Detailed progress will be displayed in the console and logged to the `logs/processing.log` file.
5.  **Check the Results**: Once finished, the original game folder will be moved to one of three directories:
    -   `Processed_Static_Games`: The game was successfully uploaded.
    -   `Already_Exists`: A game with the same title is already on the site.
    -   `Errored_Static_Games`: An error occurred during processing. Check the log file for details.












































# CYOA Updater Static

`CYOA_updater_static` — это инструмент, предназначенный для автоматического создания каталожных данных для статичных, основанных на изображениях игр в жанре "Choose Your Own Adventure" (CYOA). Он извлекает текст из изображений игры, анализирует его с помощью языковой модели (LLM) и генерирует структурированное описание в формате JSON, готовое для использования в каталоге.

Отличительной чертой проекта является генерация описаний в стиле "дерзкой суккубы", что придает каталогу уникальный и запоминающийся характер.

## Основные возможности

- **Оптическое распознавание символов (OCR):** Использует Google Cloud Vision API для извлечения текста непосредственно из файлов изображений CYOA.
- **Генерация контента с помощью ИИ:** Отправляет извлеченный текст большой языковой модели (LLM) для создания заголовков, описаний и тегов на основе сложного и настраиваемого шаблона (`prompt`).
- **Структурированный вывод:** Генерирует данные в формате JSON, включая название, описание, автора, теги и другую метаинформацию.
- **Кастомизируемый тон:** Шаблон промпта настроен на создание описаний от лица персонажа (дерзкой и игривой суккубы), что делает контент более живым и привлекательным.
- **Веб-интерфейс (опционально):** Наличие Flask в зависимостях предполагает возможность запуска простого веб-сервера для управления процессом или отображения результатов.

## Как это работает

1.  **Обработка изображений:** Скрипт принимает на вход изображения страниц CYOA.
2.  **Извлечение текста:** С помощью `google-cloud-vision` весь текст с изображений считывается и объединяется.
3.  **Запрос к LLM:** Извлеченный текст вместе с другой метаинформацией (список авторов, тегов) вставляется в шаблон из `prompts/static_cyoa_catalog_prompt.md`.
4.  **Генерация JSON:** Готовый промпт отправляется через API к большой языковой модели (например, Google Gemini или OpenAI GPT). Модель возвращает ответ в виде JSON-строки.
5.  **Сохранение результата:** Полученный JSON-файл сохраняется и может быть использован для обновления базы данных или фронтенда каталога CYOA.

## Установка

1.  **Клонируйте репозиторий:**
    ```bash
    git clone <your-repository-url>
    cd CYOA_updater_static-1
    ```

2.  **Создайте и активируйте виртуальное окружение:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # Для Windows: venv\Scripts\activate
    ```

3.  **Установите зависимости:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Настройте переменные окружения:**
    Для работы с API Google Cloud Vision и, возможно, API языковой модели, вам понадобятся ключи доступа. Создайте файл `.env` в корневом каталоге проекта и добавьте в него необходимые переменные.

    Пример файла `.env`:
    ```
    # Путь к файлу ключа сервисного аккаунта Google Cloud
    GOOGLE_APPLICATION_CREDENTIALS="path/to/your/google-credentials.json"

    # Ключ API для языковой модели
    LLM_API_KEY="your_llm_api_key_here"
    ```

## Использование

*(Этот раздел следует дополнить конкретными командами для запуска скрипта)*

Пример команды для запуска обработки:
```bash
python main.py --input-dir /path/to/cyoa/images --output-dir /path/to/output
```

---

Проект использует библиотеки `Pillow` для работы с изображениями и `tqdm` для отображения прогресс-баров при обработке большого количества файлов.
