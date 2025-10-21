import re
import os

# --- НАСТРОЙКИ ---
SOURCE_DIRECTORY = "source_files"
OUTPUT_DIRECTORY = "translated_files"
FILENAME_TO_PROCESS = "index.html"
# --- КОНЕЦ НАСТРОЕК ---

def process_file(content):
    """
    Обрабатывает HTML-файл, находя пары тегов с классами KOR и ENG,
    и заменяя их на один тег KOR с английским содержимым.
    """

    # Это сложное, но очень точное регулярное выражение.
    # Оно находит пару одинаковых тегов (p/p, span/span и т.д.)
    # с классами KOR и ENG, которые идут друг за другом.
    pattern = re.compile(
        # --- Находим корейский тег ---
        # Группа 1: Весь открывающий тег KOR (например, '<p class="... KOR">')
        # Группа 2: Только имя тега (например, 'p')
        r'(<(\w+)[^>]*?class="[^"]*?KOR.*?">)'
        # Корейское содержимое (мы его просто пропускаем)
        r'\s*.*?\s*'
        # Закрывающий тег KOR (используем \2, чтобы имя тега совпадало)
        r'</\2>'
        
        # --- Пробелы между тегами ---
        r'\s*'
        
        # --- Находим английский тег ---
        # Открывающий тег ENG (имя тега должно совпадать с корейским)
        r'<\2[^>]*?class="[^"]*?ENG.*?">'
        # Группа 3: Английское содержимое, которое нам нужно!
        r'\s*(.*?)\s*'
        # Закрывающий тег ENG
        r'</\2>',
        # re.DOTALL позволяет точке '.' находить переносы строк
        re.DOTALL 
    )

    # Строка для замены:
    # \1 - это оригинальный открывающий тег KOR
    # \3 - это английское содержимое
    # </\2> - это правильный закрывающий тег KOR
    replacement = r'\1\3</\2>'

    processed_content = pattern.sub(replacement, content)
    
    return processed_content

def main():
    """
    Главная функция.
    """
    if not os.path.exists(OUTPUT_DIRECTORY):
        os.makedirs(OUTPUT_DIRECTORY)
        print(f"Создана папка: {OUTPUT_DIRECTORY}")

    source_path = os.path.join(SOURCE_DIRECTORY, FILENAME_TO_PROCESS)
    output_path = os.path.join(OUTPUT_DIRECTORY, FILENAME_TO_PROCESS)

    print(f"Начинаю обработку файла: {FILENAME_TO_PROCESS}...")

    if not os.path.exists(source_path):
        print(f"ОШИБКА: Файл '{source_path}' не найден!")
        return

    try:
        with open(source_path, 'r', encoding='utf-8') as f:
            content = f.read()

        new_content = process_file(content)

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Готово! Обработанный файл сохранен как '{output_path}'.")

    except Exception as e:
        print(f"!! Произошла ошибка при обработке файла: {e}")


if __name__ == "__main__":
    main()