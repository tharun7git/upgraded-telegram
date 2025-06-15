from flask import Flask, jsonify
from flask_cors import CORS  # to allow requests from browser

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/api/data")
def get_data():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

