# Delivery App Example

This repository contains a simple Delivery App Example built using Node.js, Express.js, and the Sequelize ORM. The app showcases various features of a delivery application, including admin management and cart functionality. It is implemented entirely in JavaScript.

## Features

The Delivery App Example demonstrates the following features:

- Admin Panel: Allows administrators to manage products and orders.
- User Cart: Enables users to add products to their carts.
- Product Management: CRUD operations for managing products.
- Order Placement: Users can place orders for selected products.

## API Endpoints

The app exposes the following API endpoints:

- **POST /login**: Handles user authentication and returns a JWT token.
- **POST /register**: Allows users to create new accounts.
- **GET /products**: Retrieves the list of available products.
- **POST /products**: Adds new products to the product list.
- **GET /sales**: Retrieves all orders placed by users.
- **POST /sales**: Allows users to place new orders.
- **GET /admin**: Retrieves admin-specific data.

## Getting Started

To run the application, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.

### Backend Setup

3. Navigate to the 'backend' directory: `cd backend`
4. Install the backend dependencies using the command: `npm install`
5. Configure your database connection in the config/config.json file.
6. Run the migrations using: `npx sequelize-cli db:migrate`
7. Start the backend server with: `npm start`
   The backend server will run on http://localhost:3001.

### Frontend Setup

8. Open a new terminal window.
9. Navigate to the 'frontend' directory: `cd frontend`
10. Install the frontend dependencies using the command: `npm install`
11. Start the frontend app with: `npm start`
    The frontend app will run on http://localhost:3000.

## About Sequelize

This project uses the Sequelize ORM for handling database interactions. Sequelize is a powerful and flexible ORM that simplifies database operations by providing an intuitive interface to work with databases.

## Note

This project serves as an illustrative example of building a delivery application using Node.js, Express.js, and Sequelize. It covers basic functionality and can be used as a starting point for more complex projects.

Feel free to explore, modify, and expand upon this project according to your needs.
