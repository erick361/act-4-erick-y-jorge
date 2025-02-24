# Node.js Express App

This is a Node.js application built using the Express.js framework. It implements JWT authentication and connects to a MongoDB database. The application includes routes for user registration and login, as well as a protected route for accessing product information.

## Project Structure

```
nodejs-express-app
├── src
│   ├── controllers
│   │   └── auth.js          # Handles user registration and login
│   ├── middlewares
│   │   └── auth.js          # Middleware for JWT authentication
│   ├── models
│   │   └── user.js          # Mongoose schema for User model
│   ├── routes
│   │   └── index.js         # Defines application routes
│   ├── views
│   │   └── login.html       # Static HTML view for login
│   ├── app.js               # Initializes Express app and middleware
│   └── server.js            # Entry point of the application
├── tests
│   └── auth.test.js         # Unit tests for authentication functionality
├── package.json              # Project metadata and dependencies
├── jest.config.js           # Configuration for Jest
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nodejs-express-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `src/app.js`.

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Access the application at `http://localhost:3000`.

3. Use the login page at `http://localhost:3000/login.html` to authenticate users.

## Testing

Run the tests using Jest:
```
npm test
```

## License

This project is licensed under the MIT License.