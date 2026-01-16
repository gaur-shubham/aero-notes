//connection to database
const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/mern-app" 

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
};

module.exports = connectToMongo;