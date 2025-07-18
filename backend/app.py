from flask import Flask
from flask import jsonify
from flask_cors import CORS
from flask import request

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
@app.route('/upload', method=['POST'])
def upload():
    data = request.get_json()
    print("Recieved: ", data)

    user_id = data.get("user_id")
    file_urls = data.get("file_urls") # list of urls sent from frontend

    print("User ID: ", user_id)
    print("Files: ", file_urls)

    return jsonify({"satus":"success", "message": "Data recieved!"})



if __name__ == '__main__':
    app.run(debug=True)