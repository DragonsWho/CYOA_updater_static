import re
import json
import argparse
import os

# --- Класс для цветного вывода в терминал ---
class TermColors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def cprint(color, text):
    """Печатает цветной текст."""
    print(color + text + TermColors.ENDC)

def js_string_escape(text):
    """Корректно экранирует строку для вставки в JavaScript."""
    return json.dumps(text, ensure_ascii=False)[1:-1]

def extract_mode(source_file, output_file):
    """
    Извлекает KOR строки и существующие ENG строки в качестве подсказок.
    Сохраняет результат в .json файл.
    """
    cprint(TermColors.HEADER, f"--- Режим извлечения текста ---")
    print(f"Анализ файла: {TermColors.BOLD}{source_file}{TermColors.ENDC}...")
    
    try:
        with open(source_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        cprint(TermColors.FAIL, f"Ошибка: Исходный файл не найден: {source_file}")
        return

    kor_pattern = re.compile(r"""(["']?)KOR\1\s*:\s*([`"'])(.*?)\2""", re.DOTALL)
    eng_pattern = re.compile(r"""(["']?)ENG\1\s*:\s*([`"'])(.*?)\2""")
    
    translations = {}
    id_counter = 0
    last_pos = 0

    for kor_match in kor_pattern.finditer(content):
        kor_text = kor_match.group(3)
        if not kor_text.strip():
            continue
        
        id_counter += 1
        str_id = f"{id_counter:06d}"
        
        # Ищем ENG-блок, который идет сразу после KOR-блока
        eng_hint = ""
        search_start = kor_match.end()
        eng_match = eng_pattern.search(content, search_start)
        
        # Убедимся, что найденный ENG не относится к следующему KOR
        next_kor_match = kor_pattern.search(content, search_start)
        if eng_match and (not next_kor_match or eng_match.start() < next_kor_match.start()):
            eng_hint = eng_match.group(3)

        translations[str_id] = {
            "source": kor_text,
            "hint": eng_hint
        }
        last_pos = kor_match.end()

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(translations, f, ensure_ascii=False, indent=4)

    cprint(TermColors.OKGREEN, f"\nГотово! Извлечено {len(translations)} строк в файл '{TermColors.BOLD}{output_file}{TermColors.ENDC}'.")
    
    # --- Инструкции для пользователя ---
    cprint(TermColors.HEADER, "\n--- Что делать дальше? ---")
    print("1. Откройте файл " + TermColors.OKCYAN + output_file + TermColors.ENDC)
    print("   Внутри вы увидите структуру:")
    cprint(TermColors.OKBLUE, """
    {
        "000001": {
            "source": "돌아가기",
            "hint": "Back"
        },
        ...
    }
    """)
    print(f"2. {TermColors.BOLD}Переведите текст из поля 'source'{TermColors.ENDC}. Поле 'hint' - это подсказка, как эта фраза была переведена раньше.")
    print(f"   {TermColors.WARNING}ВАЖНО: Ваш перевод должен быть записан ВМЕСТО корейского текста в поле 'source'.{TermColors.ENDC}")
    print("\n   Пример после перевода:")
    cprint(TermColors.OKGREEN, """
    {
        "000001": {
            "source": "Return",
            "hint": "Back"
        },
        ...
    }
    """)
    print("3. Сохраните ваши переводы в " + TermColors.BOLD + "НОВЫЙ ФАЙЛ" + TermColors.ENDC + " (например, " + TermColors.OKCYAN + "translated.json" + TermColors.ENDC + ").")
    print("\n4. Для вставки перевода обратно в код, используйте команду:")
    
    # --- ВОТ ИСПРАВЛЕННАЯ СТРОКА ---
    cprint(TermColors.OKCYAN, f"   python3 localize.py insert {source_file} translated.json")


def insert_mode(source_file, translation_file, output_file):
    """
    Вставляет переводы из .json файла в ENG поля.
    """
    cprint(TermColors.HEADER, f"--- Режим вставки перевода ---")
    print(f"Исходный файл: {TermColors.BOLD}{source_file}{TermColors.ENDC}")
    print(f"Файл перевода: {TermColors.BOLD}{translation_file}{TermColors.ENDC}")
    
    try:
        with open(source_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        cprint(TermColors.FAIL, f"Ошибка: Исходный файл не найден: {source_file}")
        return
        
    try:
        with open(translation_file, 'r', encoding='utf-8') as f:
            translations = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        cprint(TermColors.FAIL, f"Ошибка: Не удалось загрузить файл с переводами '{translation_file}': {e}")
        return

    kor_pattern = re.compile(r"""(["']?)KOR\1\s*:\s*([`"'])(.*?)\2""", re.DOTALL)
    eng_pattern = re.compile(r"""(["']?)ENG\1\s*:\s*([`"'])(.*?)\2""")
    
    kor_matches = [m for m in kor_pattern.finditer(content) if m.group(3).strip()]

    if len(kor_matches) != len(translations):
        cprint(TermColors.WARNING, "\n--- ПРЕДУПРЕЖДЕНИЕ! ---")
        cprint(TermColors.WARNING, f"Количество строк в исходном файле ({len(kor_matches)}) не совпадает с количеством в файле перевода ({len(translations)}).")
        cprint(TermColors.WARNING, "Результат может быть некорректным. Убедитесь, что исходный код не менялся после извлечения текста.\n")

    replacements_done = 0
    # Идем по списку совпадений в ОБРАТНОМ ПОРЯДКЕ, чтобы не сбивать индексы
    for i in range(len(kor_matches) - 1, -1, -1):
        kor_match = kor_matches[i]
        str_id = f"{i + 1:06d}"

        if str_id not in translations:
            continue

        # Убедимся, что запись в файле перевода имеет правильную структуру
        if not isinstance(translations[str_id], dict) or 'source' not in translations[str_id]:
            cprint(TermColors.FAIL, f"Ошибка: Неправильный формат для ID {str_id} в файле {translation_file}. Пропускаем.")
            continue
            
        translated_text = translations[str_id]['source']
        
        search_start = kor_match.end()
        eng_match = eng_pattern.search(content, search_start)

        next_kor_match = kor_pattern.search(content, search_start)
        if eng_match and (not next_kor_match or eng_match.start() < next_kor_match.start()):
            escaped_translation = js_string_escape(translated_text)
            
            start_pos = eng_match.start(3)
            end_pos = eng_match.end(3)

            content = content[:start_pos] + escaped_translation + content[end_pos:]
            replacements_done += 1

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    cprint(TermColors.OKGREEN, f"\nГотово! Сделано замен: {replacements_done}.")
    cprint(TermColors.OKGREEN, f"Новый файл с переводами создан: '{TermColors.BOLD}{output_file}{TermColors.ENDC}'")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Скрипт для локализации JS файлов с подсказками и инструкциями (v5.1).",
        formatter_class=argparse.RawTextHelpFormatter
    )
    subparsers = parser.add_subparsers(dest='mode', required=True, help='Режим работы')

    parser_extract = subparsers.add_parser('extract', help='Извлечь KOR текст в .json файл для перевода.')
    parser_extract.add_argument('source', help='Исходный JS файл (например, data.js)')
    parser_extract.add_argument('-o', '--output', default='to_translate.json', help='Выходной .json файл (по умолчанию: to_translate.json)')

    parser_insert = subparsers.add_parser('insert', help='Вставить переведенный текст из .json файла.')
    parser_insert.add_argument('source', help='Оригинальный JS файл')
    parser_insert.add_argument('translation', help='Файл .json с переведенным текстом')
    parser_insert.add_argument('-o', '--output', default=None, help='Имя нового JS файла (по умолчанию: original_filename_ENG.js)')

    args = parser.parse_args()

    if args.mode == 'extract':
        extract_mode(args.source, args.output)
    elif args.mode == 'insert':
        output_file = args.output
        if not output_file:
            base, ext = os.path.splitext(args.source)
            output_file = f"{base}_ENG{ext}"
        insert_mode(args.source, args.translation, output_file)