import re
import os
import shutil
import codecs

# --- НАСТРОЙКИ ---
FILENAME = "story_ENG.js"  # Имя файла, который нужно исправить
# -----------------

def fix_eng_string_format(match):
    """
    Эта функция вызывается для каждого найденного совпадения.
    Она преобразует "ENG":"..." или ENG:"..." в ENG:`...`
    """
    indentation = match.group(1)
    key_part = match.group(2)
    string_content = match.group(3)

    # Убираем кавычки вокруг ключа, если они есть.
    # Это сработает и для "ENG": и для ENG:
    fixed_key = key_part.replace('"', '')

    try:
        # "Раскодируем" escape-последовательности в реальные символы
        decoded_content = codecs.decode(string_content, 'unicode_escape')
    except Exception as e:
        print(f"Предупреждение: не удалось обработать строку: {string_content[:50]}... Ошибка: {e}")
        return match.group(0)

    # Собираем новую, исправленную строку с обратными кавычками.
    new_string_block = f"{indentation}{fixed_key}`{decoded_content}`"
    
    return new_string_block


def main():
    """
    Основная функция скрипта.
    """
    if not os.path.exists(FILENAME):
        print(f"Ошибка: Файл '{FILENAME}' не найден. Убедитесь, что скрипт лежит в той же папке.")
        return

    # 1. Создаем резервную копию на всякий случай
    backup_filename = FILENAME + ".bak"
    print(f"Создаю резервную копию: '{backup_filename}'")
    shutil.copy(FILENAME, backup_filename)

    # 2. Читаем содержимое файла
    try:
        with open(FILENAME, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Ошибка при чтении файла: {e}")
        return

    # 3. --- ИЗМЕНЕНИЕ ЗДЕСЬ ---
    # Регулярное выражение теперь ищет ключ ENG с необязательными кавычками ("?ENG"?)
    regex = re.compile(r'^(\s*)("?ENG"?\s*:\s*)"((?:\\.|[^"\\])*)"', re.MULTILINE)

    # 4. Заменяем все найденные совпадения
    print("Начинаю исправление строк...")
    fixed_content, num_replacements = regex.subn(fix_eng_string_format, content)

    if num_replacements > 0:
        # 5. Записываем исправленное содержимое обратно в файл
        try:
            with open(FILENAME, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            print(f"Готово! Исправлено {num_replacements} строк в файле '{FILENAME}'.")
        except Exception as e:
            print(f"Ошибка при записи в файл: {e}")
            print("Ваши изменения не сохранены, но есть резервная копия.")
    else:
        print("Не найдено строк для исправления. Файл не изменен.")


if __name__ == "__main__":
    main()