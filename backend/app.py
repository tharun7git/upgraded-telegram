from flask import Flask, jsonify
import json
import os

app = Flask(__name__)

LOG_FILE = 'change_log.json'

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

# (keep your other routes)
