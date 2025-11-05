# manual_splitter.py

import sys
import os
import base64
import socket
import webbrowser
import logging
from flask import Flask, render_template, request, send_file, jsonify
from threading import Timer

# Настройка логирования для этого скрипта
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)
# Подавляем стандартные логи Flask
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

# --- ИЗМЕНЕНО: Глобальные переменные больше не нужны для кода выхода ---
IMAGE_PATH = None
OUTPUT_DIR = None

def find_free_port():
    """Находит свободный порт для запуска сервера."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        return s.getsockname()[1]

# --- ИЗМЕНЕНО: Новый, более надежный способ выключения сервера ---
def shutdown_server(exit_code=0):
    """
    Запускает таймер, который через 1 секунду принудительно
    завершит процесс сервера с указанным кодом выхода.
    Это дает время Flask отправить ответ браузеру.
    """
    logging.info(f"Server will shut down with exit code {exit_code}.")
    # os._exit() - это немедленное завершение, идеально для дочернего процесса
    Timer(1.0, lambda: os._exit(exit_code)).start()
# --------------------------------------------------------------------

@app.route('/')
def index():
    return render_template('splitter.html')

@app.route('/image_to_split')
def get_image():
    return send_file(IMAGE_PATH)

@app.route('/save_split', methods=['POST'])
def save_split():
    data = request.json
    
    try:
        # Декодируем и сохраняем верхнюю часть
        top_data = data['top'].split(',')[1]
        top_bytes = base64.b64decode(top_data)
        base, ext = os.path.splitext(os.path.basename(IMAGE_PATH))
        top_path = os.path.join(OUTPUT_DIR, f"{base}_part1{ext}")
        with open(top_path, 'wb') as f:
            f.write(top_bytes)

        # Декодируем и сохраняем нижнюю часть
        bottom_data = data['bottom'].split(',')[1]
        bottom_bytes = base64.b64decode(bottom_data)
        bottom_path = os.path.join(OUTPUT_DIR, f"{base}_part2{ext}")
        with open(bottom_path, 'wb') as f:
            f.write(bottom_bytes)
        
        logging.info("Images split and saved successfully.")
        # Завершаем работу с кодом 0 (успех)
        shutdown_server(exit_code=0)
        return jsonify(success=True)
        
    except Exception as e:
        logging.error(f"Failed to save split images: {e}")
        # Завершаем работу с кодом 1 (неудача)
        shutdown_server(exit_code=1)
        return jsonify(success=False, error=str(e)), 500


@app.route('/cancel')
def cancel():
    logging.info("User cancelled the operation.")
    # Завершаем работу с кодом 1 (неудача/отмена)
    shutdown_server(exit_code=1)
    return "Cancelled."


def main():
    global IMAGE_PATH, OUTPUT_DIR
    if len(sys.argv) < 3:
        print("Usage: python manual_splitter.py <path_to_image> <output_directory>")
        sys.exit(1)
        
    IMAGE_PATH = sys.argv[1]
    OUTPUT_DIR = sys.argv[2]
    
    if not os.path.exists(IMAGE_PATH):
        logging.error(f"Image not found: {IMAGE_PATH}")
        sys.exit(1)
        
    port = find_free_port()
    url = f"http://127.0.0.1:{port}"
    
    Timer(1, lambda: webbrowser.open(url)).start()
    logging.info(f"Starting manual splitter server at {url}")
    logging.info("Please go to your web browser to split the image.")
    
    # app.run() теперь будет работать, пока процесс не будет завершен изнутри
    app.run(port=port, debug=False)

if __name__ == "__main__":
    main()