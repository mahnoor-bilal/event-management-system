# Event Management System

A full-stack web application for managing events, built with React for the frontend and Node.js/Express for the backend, using MongoDB for data storage.

## Features

- User authentication (login/register)
- Event creation and management
- Dashboard for viewing events
- Booking system for events
- Protected routes for authenticated users

## Project Structure

- `client/` - React frontend application
- `server/` - Node.js/Express backend API

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/event-management-system.git
   cd event-management-system
   ```

2. Install dependencies for the server:
   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the client:
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `server/` directory with:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

## Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```

2. In a new terminal, start the frontend:
   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/events` - Get all events
- `POST /api/events` - Create a new event (authenticated)
- `GET /api/bookings` - Get user bookings (authenticated)
- `POST /api/bookings` - Book an event (authenticated)

## Technologies Used

- **Frontend:** React, React Router, CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT
- **Styling:** Custom CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.