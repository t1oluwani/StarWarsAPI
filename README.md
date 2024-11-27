# Star Wars Character Information Project

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview
This project is a web application that I used to gain experience in both creating an API and using a 3rd party API, it allows users to submit a form with their favorite Star Wars character information and retrieve character details from the Star Wars API (SWAPI). The backend is built with Node.js and Express, and MongoDB is used to store form submissions.

## Features
- Submit a form with Star Wars character preferences.
- Fetch and display Star Wars character details from SWAPI.
- View all submitted forms.
- Store form submissions in MongoDB.
- Simple and intuitive UI with relevant theme.

## Installation

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/t1oluwani/StarWarsAPI.git
    cd StarWarsAPI
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB:
    Make sure MongoDB is running on `mongodb://localhost:27017/csf_skillassessment`.

4. Start the server:
    ```bash
    node index.js
    ```

5. Open `index.html` in your browser to use the application.

## Usage
1. Fill out the form with your name, email, age, and favorite Star Wars movie and character details.
2. Submit the form to save the data in the backend.
3. Type in the an ID of a Star Wars Character
4. Click the "Fetch Character" button to retrieve and display information about a Star Wars character from SWAPI.
5. View all submitted forms on the page.

# API Endpoints

## POST `/starwars`
Submit a new form.

**Request Body:**

    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 30,
      "favouriteStarWarsMovie": "The Empire Strikes Back",
      "favouriteStarWarsMovieRating": 5,
      "favouriteStarWarsCharacter": "Luke Skywalker",
      "favouriteStarWarsCharacterRating": 5
    }

**Response:**

    {
      "message": "Form submitted successfully!",
      "id": 1
    }

## GET `/starwars`
Fetch all submitted forms.

**Response:**

    {
      "Forms": [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "age": 30,
          "favouriteStarWarsMovie": "The Empire Strikes Back",
          "favouriteStarWarsMovieRating": 5,
          "favouriteStarWarsCharacter": "Luke Skywalker",
          "favouriteStarWarsCharacterRating": 5
        },
        ...
      ]
    }

## GET `/starwars/:id`
Fetch a form by its ID.

**Response:**

    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "age": 30,
      "favouriteStarWarsMovie": "The Empire Strikes Back",
      "favouriteStarWarsMovieRating": 5,
      "favouriteStarWarsCharacter": "Luke Skywalker",
      "favouriteStarWarsCharacterRating": 5
    }

## DELETE `/starwars`
Delete all forms.

**Response:**

    {
      "message": "All forms deleted successfully!"
    }


## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML/CSS
- JavaScript
- Fetch API
- SWAPI (Star Wars API)
