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

2. Create a `.env` file in the root of the [frontend](http://_vscodecontentref_/1) directory with the following content:

    ```env
    REACT_APP_BACKEND_URL=https://your-app-name.herokuapp.com
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

## Deployment

### Frontend Deployment

1. Install the `gh-pages` package:

    ```sh
    npm install gh-pages --save-dev
    ```

2. Update `package.json` with the following properties:

    ```json
    {
      "homepage": "https://<your-github-username>.github.io/<your-repo-name>",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
    }
    ```

3. Deploy to GitHub Pages:

    ```sh
    npm run deploy
    ```

### Backend Deployment

1. Create a `Procfile` in the [backend](http://_vscodecontentref_/2) directory with the following content:

    ```Procfile
    web: python app.py
    ```

2. Create a `requirements.txt` file:

    ```sh
    pip freeze > requirements.txt
    ```

3. Login to Heroku:

    ```sh
    heroku login
    ```

4. Create a new Heroku app:

    ```sh
    heroku create your-app-name
    ```

5. Deploy to Heroku:

    ```sh
    git init
    git add .
    git commit -m "Initial commit"
    git push heroku master
    ```

6. Set environment variables on Heroku (if needed):

    ```sh
    heroku config:set YOUR_ENV_VARIABLE=value
    ```

## Environment Variables

### Frontend

Create a `.env` file in the root of the [frontend](http://_vscodecontentref_/3) directory with the following content:

```env
REACT_APP_BACKEND_URL=https://your-app-name.herokuapp.com