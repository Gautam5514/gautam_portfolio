require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); // To allow cross-origin requests (frontend-backend communication)


// Import models and database config
const User = require('./models/user.Models');
require('./DB/dbConfig');

// Middleware
app.use(express.json()); // To parse JSON bodies from the frontend
app.use(cors()); // To allow cross-origin requests (frontend-backend communication)

// API Route to handle form submissions
app.post('/api/contact', async (req, res) => {
    try {
        // Get form data from request body
        const { name, email, subject, message } = req.body;

        // Ensure all fields are present
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new user/contact entry using the model
        const newUser = new User({
            name,
            email,
            subject,
            message
        });

        // Save the entry to MongoDB
        await newUser.save();

        // Respond with success
        res.status(201).json({ message: 'Message received successfully!' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ message: 'Failed to save message', error });
    }
});


// Start the server
const port = process.env.PORT || 2500;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
