# Quotifolio

The project is deployed to Vercel and can be found [here](https://quotifolio.vercel.app)

## Table of Contents

-   [Purpose of the Project](#purpose-of-the-project)
-   [Project Description](#project-description)
-   [Features Implemented](#features-implemented)
-   [Upcoming Features](#upcoming-features)
-   [Technologies Used](#technologies-used)
-   [How to Run the Project](#how-to-run-the-project)

## Purpose of the Project

I created this project to learn more about:

-   Authentication and authorization
-   NoSQL databases
-   Integrating a 3rd party API
-   Creating CRUD APIs

## Project Description

This is a random quote generator, but also an app let's users store their own quotes.

## Features Implemented

-   Users can create their own accounts.
-   Both logged-in and non-logged-in users can get random quotes.
-   Logged-in users can create their own quotes.
-   Logged-in users can delete their own quotes.
-   Logged-in users can update their own quotes.

## Upcoming Features

-   Let users see other users quotes and like them.
-   Create a page where all the newly added quotes are displayed.

## Technologies Used

-   **Front-end**: Vue.js with Nuxt, Tailwind CSS
-   **Back-end**: Nuxt Server, Nuxt-Auth, Bcrypt
-   **Database**: MongoDB connected via Nuxt-Mongoose

## How to Run the Project

1. Clone the GitHub repository.
2. Create a `.env` file following the provided example.
3. Install all dependencies using `npm i`.
4. Run the project with `npm run dev`.
