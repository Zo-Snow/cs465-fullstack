# CS465-fullstack
CS-465 Full Stack Development with MEAN

# Architecture

## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

In this project, I used Express with Handlebars to create server-rendered pages for the customer-facing site, where the server builds the page for every request. In contrast, I used Angular to build a Single-Page Application (SPA) for the administrative side. The SPA is more efficient because it updates only the necessary parts of the screen dynamically without reloading the whole page, providing a faster and more responsive experience for the user.

## Why did the backend use a NoSQL MongoDB database?

The backend used MongoDB because its document-based structure is flexible and works naturally with JavaScript and JSON. Since our application handles varied data like trip details, hotel info, and flight options, a NoSQL database allows us to store and retrieve this information as objects without the rigid table requirements of a traditional SQL database. This made it much easier to pass data through the MEAN stack.

# Functionality

## How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JavaScript is a programming language used to create logic while JSON is a text based format used specifically for storing and moving data. JSON acts as the bridge between the frontend and backend because the Express server retrieves data from the database and converts it into a JSON string to send to the Angular frontend. The frontend then turns that JSON back into a JavaScript object to display it to the user.

## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

I refactored the project by moving from basic HTML templates to a component based architecture in Angular. For example I created specific components for trip listings and edit screens rather than writing unique code for every single page. The benefit of using these reusable UI components is that it makes the code much cleaner and allows me to update a single component to change the look of the entire application.

# Testing

## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Methods like GET and POST are the actions we take to read or update data at specific URL endpoints. I used Postman to test these endpoints and ensure the server was responding correctly to requests. Adding security meant testing that only authenticated users with a valid login could access sensitive actions which ensures that trip data stays protected from unauthorized changes.

# Reflection

## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course helped me reach my goals by teaching me how to build a complete and secure web application from start to finish. I developed strong skills in the MEAN stack by connecting a frontend application to a backend API and database. Learning how to handle user authentication and API testing has made me a much more marketable candidate because these are essential skills for any professional software developer.
