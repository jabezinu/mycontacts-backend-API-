# MyContacts Backend API

A RESTful API backend for managing contacts, built with Node.js, Express, and MongoDB.

## Features

- User Authentication (Register/Login)
- JWT-based Authorization
- Contact Management
- Error Handling
- MongoDB Database Integration
- Environment Variable Configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd mycontacts-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start running on `http://localhost:5000` (or the port specified in your .env file).

## API Endpoints

### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/current` - Get current user (Protected Route)

### Contact Routes
- `GET /api/contacts` - Get all contacts (Protected Route)
- `POST /api/contacts` - Create a new contact (Protected Route)
- `GET /api/contacts/:id` - Get a specific contact (Protected Route)
- `PUT /api/contacts/:id` - Update a contact (Protected Route)
- `DELETE /api/contacts/:id` - Delete a contact (Protected Route)

## Project Structure

```
mycontacts-backend/
├── config/
│   └── dbConnection.js
├── controllers/
│   ├── contactController.js
│   └── userController.js
├── middleware/
│   ├── errorHandler.js
│   └── validateTokenHandler.js
├── models/
│   ├── contactModel.js
│   └── userModel.js
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── constants.js
```

## Dependencies

- express: ^4.21.2
- mongoose: ^8.12.1
- dotenv: ^16.4.7
- bcrypt: ^5.1.1
- jsonwebtoken: ^9.0.2
- express-async-handler: ^1.2.0

## Development Dependencies

- nodemon: ^3.1.9

## Author

Jabez Shiferaw

## License

MIT 