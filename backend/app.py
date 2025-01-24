import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import logging

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Load questions and answers from JSON
with open('questions_answers.json', 'r') as file:
    qa_data = json.load(file)

# Function to handle different types of queries
def handle_query(query):
    query = query.lower().strip()
    
    # Search in general responses
    if query in qa_data.get("general", {}):
        return qa_data["general"][query]
    
    # Search in Segment responses
    elif "segment" in query:
        return search_category("segment", query)
    
    # Search in mParticle responses
    elif "mparticle" in query:
        return search_category("mparticle", query)
    
    # Search in Lytics responses
    elif "lytics" in query:
        return search_category("lytics", query)
    
    # Search in Zeotap responses
    elif "zeotap" in query:
        return search_category("zeotap", query)
    
    # Default response for unrecognized queries
    return f"I don't have an answer for your query: {query}. Please check the documentation."

# Helper function to search in specific categories
def search_category(category, query):
    for key, value in qa_data.get(category, {}).items():
        if key in query:
            return value
    return f"I couldn't find specific information about '{query}' in {category}. Check the documentation for more details."

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    query = data.get('query')
    if not query:
        return jsonify({"error": "Query parameter is required"}), 400
    
    response = handle_query(query)
    return jsonify({"response": response})

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
