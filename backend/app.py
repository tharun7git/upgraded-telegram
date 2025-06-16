from flask import Flask, jsonify
import json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests (important if frontend is on another domain/IP)

LOG_FILE = os.path.join(os.path.dirname(__file__), 'change_log.json')

@app.route('/api/change-logs', methods=['GET'])
def get_change_logs():
    if not os.path.exists(LOG_FILE):
        return jsonify([])
    with open(LOG_FILE, 'r') as f:
        logs = json.load(f)
    messages = [
        f"This message is from Flask: the code was changed at {entry['timestamp']}"
        for entry in logs
    ]
    return jsonify(messages)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/', methods=['GET'])
def home():
    return "Flask backend is running!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
