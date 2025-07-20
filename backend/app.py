from flask import Flask
from flask import jsonify
from flask_cors import CORS
from flask import request
import requests
from ocr import extract_text_from_pdf

app = Flask(__name__)
# CORS(app)   # This will allow frontend origins by default
CORS(app, origins=["http://localhost:3000"])    # Restricting to only frontend

# if using nextjs on different port or domain
# CORS(app, origins=["http://localhost:3000", "https://smartexamai.vercel.app"])




@app.route('/')
def home():
    return "Hello Sourav, this is your Flask Backend!"

@app.route('/about')
def about():
    return "This is Sourav's about route"


@app.route('/api/greet')
def greet():
    return jsonify({'message':'Hello from Flask!'})


# Handling JSON data from frontend
@app.route('/upload', methods=['POST'])
def upload():
    data = request.get_json()
    # print("Recieved: ", data)

    url = data.get("url") # list of urls sent from frontend
    size = data.get("size")

    print("Url: ", url)
    print("Size: ",size)
    return jsonify({"status":"success", "message": "Data recieved!"})


if __name__ == '__main__':
    app.run(debug=True)