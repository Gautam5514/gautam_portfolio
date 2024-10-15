require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    throw new Error('MONGO_URI is not defined in environment variables.');
}

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection failed:", err));  // Added error argument to catch

// Export the mongoose instance
module.exports = mongoose;
