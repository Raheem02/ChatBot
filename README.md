# Chatbot Application

This project is a chatbot application built with a React frontend and a Flask backend. The frontend is hosted on GitHub Pages, and the backend is hosted on Heroku.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
  - [Frontend Deployment](#frontend-deployment)
  - [Backend Deployment](#backend-deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- Chat interface with dynamic responses
- Integration with Segment, Lytics, and Zeotap APIs
- Hosted on GitHub Pages (frontend) and Heroku (backend)

## Installation

### Prerequisites

- Node.js and npm
- Python and pip
- Git

### Frontend

1. Install dependencies:

    ```sh
    npm install
    ```

### Backend

1. Navigate to the backend directory:

    ```sh
    cd ../backend
    ```

2. Create a virtual environment and activate it:

    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install dependencies:

    ```sh
    pip install -r requirements.txt
    ```

## Usage

### Frontend

1. Start the React development server:

    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

### Backend

1. Start the Flask development server:

    ```sh
    python app.py
    ```

2. The backend will be running at `http://127.0.0.1:5000`.
