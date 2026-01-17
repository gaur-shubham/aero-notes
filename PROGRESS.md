# 📘 Progress Log

## Stage
Backend Development – MERN Stack

## ✅ What I Did
- Set up Node.js + Express backend structure
- Connected the backend to MongoDB (local) using Mongoose
- Installed and used nodemon for auto-restarting the server during development
- Tested backend endpoints using Thunder Client (VS Code) / postman collections
- Created initial route files:
    - auth.routes.js (authentication-related endpoints)
    - notes.routes.js (notes-related endpoints)
- Created initial Mongoose Models/schemas:
    - User.js
    - Notes.js
- Implemented core backend features:
    - Store user and notes data into the database
    - Validate incoming data using express-validator before saving
    - Password hashing with salt & pepper using bcrypt.js
    - JWT-based authentication
    - Created fetchuser middleware to decode JWT and attach user info to requests
    - CRUD operations for notes:
        - Create new note
        - Update existing note
        - Fetch all notes for a logged-in user
        - Delete a note

## ❓ Why I Did It
- MongoDB is used as the database for storing users and notes
- Express simplifies building APIs and handling routes, requests, and responses
- Nodemon improves developer experience by removing the need to restart the server manually
- Routes were created to structure API endpoints clearly
- Schemas define how data should be structured and validated in the database
- Data validation ensures consistent and secure data storage
- Password hashing and JWT provide secure authentication
- Middleware centralizes user authentication logic
- CRUD operations allow users to manage their notes

## ⚙️ How It Works (Current Understanding)
- MongoDB runs locally and is connected via a connection URI
- Mongoose acts as a bridge between MongoDB and the Node.js app
- Express handles HTTP requests and routes them to the correct logic
- Nodemon watches file changes and restarts the server automatically
- express-validator validates requests before processing
- Passwords are hashed with bcrypt and pepper before storing
- JWT tokens are issued on login/signup and decoded in fetchuser middleware
- Notes CRUD endpoints allow users to manage notes tied to their user ID

## 🧠 Key Learnings
- Middleware helps keep authentication logic DRY (Don’t Repeat Yourself)
- JWT enables stateless authentication across requests
- Proper route/controller separation makes the backend scalable and maintainable
- Data validation is essential for security and consistency
- Testing endpoints regularly prevents unnoticed bugs early