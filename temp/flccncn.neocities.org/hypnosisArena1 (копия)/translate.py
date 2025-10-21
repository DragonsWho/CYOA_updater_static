import re
import os

# --- НАСТРОЙКИ ---
SOURCE_DIRECTORY = "source_files"
OUTPUT_DIRECTORY = "translated_files"
# --- КОНЕЦ НАСТРОЕК ---

def translate_file_content(content):
    """
    Эта функция ищет все блоки { "KOR":"...", "ENG":"..." }
    и заменяет их на английский текст в кавычках.
    """
    # Это "регулярное выражение". Магия, которая находит нужный нам текст.
    # Оно ищет: { "KOR": что-угодно, "ENG": "какой-то текст" }
    # и "захватывает" только "какой-то текст" в группу для замены.
    # re.DOTALL позволяет точке (.) находить и символы переноса строки,
    # что важно для длинных описаний.
    pattern = re.compile(r'{\s*"KOR"\s*:.*?,\s*"ENG"\s*:\s*"(.*?)"\s*}', re.DOTALL)

    # Заменяем найденный паттерн на "\1" в кавычках.
    # "\1" — это ссылка на первую захваченную группу (наш английский текст).
    # r'"\1"' означает, что мы буквально вставляем кавычку, потом текст, потом еще кавычку.
    translated_content = pattern.sub(r'"\1"', content)
    
    return translated_content

def main():
    """
    Главная функция скрипта.
    """
    # Создаем папку для результатов, если ее еще нет.
    if not os.path.exists(OUTPUT_DIRECTORY):
        os.makedirs(OUTPUT_DIRECTORY)
        print(f"Создана папка: {OUTPUT_DIRECTORY}")

    print(f"Начинаю обработку файлов из папки: {SOURCE_DIRECTORY}...")

    # Получаем список всех файлов в исходной папке.
    try:
        files_to_process = os.listdir(SOURCE_DIRECTORY)
    except FileNotFoundError:
        print(f"ОШИБКА: Папка '{SOURCE_DIRECTORY}' не найдена! Убедись, что она существует и в ней есть файлы.")
        return

    # Проходим по каждому файлу.
    for filename in files_to_process:
        # Обрабатываем только файлы с расширением .js (или какое у тебя)
        if filename.endswith('.js'):
            source_path = os.path.join(SOURCE_DIRECTORY, filename)
            output_path = os.path.join(OUTPUT_DIRECTORY, filename)

            print(f"  -> Обрабатываю файл: {filename}")

            try:
                # Читаем содержимое исходного файла.
                with open(source_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Выполняем замену.
                new_content = translate_file_content(content)

                # Записываем результат в новый файл.
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
            
            except Exception as e:
                print(f"    !! Произошла ошибка при обработке файла {filename}: {e}")

    print("\nГотово! Все файлы обработаны и сохранены в папку 'translated_files'.")

# Это стандартный способ запустить главную функцию в Python.
if __name__ == "__main__":
    main()