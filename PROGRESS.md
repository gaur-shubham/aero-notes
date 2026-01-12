# 📘 Progress Log

## Stage
Initial Backend Setup (MERN – Backend)

## ✅ What I Did
- Set up a basic Node.js + Express backend structure
- Connected the backend to MongoDB (local) using Mongoose
- Installed and used nodemon for auto-restarting the server during development
- Tested backend endpoints using Thunder Client (VS Code)
- Created initial route files:
    - auth (authentication-related endpoints)
    - notes (notes-related endpoints)
- Created initial Mongoose schemas:
    - UserSchema
    - NotesSchema

## ❓ Why I Did It
- MongoDB is used as the database for storing users and notes
- Express simplifies building APIs and handling routes, requests, and responses
- Nodemon improves developer experience by removing the need to restart the server manually
- Routes were created early to validate API structure and understand endpoint flow
- Schemas define how data should be structured and validated in the database

## ⚙️ How It Works (Current Understanding)
- MongoDB runs locally and is connected via a connection URI
- Mongoose acts as a bridge between MongoDB and the Node.js app
- Express handles HTTP requests and routes them to the correct logic
- Nodemon watches file changes and restarts the server automatically
- Thunder Client is used to send test requests and verify API responses

## 🧠 Key Learnings
- Backend setup issues are mostly environment/config related
- MongoDB Compass is sufficient for local DB verification
- Routes and schemas can be defined early and refined later