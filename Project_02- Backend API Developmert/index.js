const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - Read the JSON body
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to DecodeLabs Backend API! 🚀" });
});

// GET - Get Users
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: "Kamal", email: "kamal@gmail.com" },
        { id: 2, name: "Nimal", email: "nimal@gmail.com" }
    ];
    res.json(users);
});

// POST - Add a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    // Basic Validation
    if (!name || !email) {
        return res.status(400).json({ 
            error: "You must provide both your name and email!" 
        });
    }

    const newUser = {
        id: Date.now(),
        name,
        email
    };

    res.status(201).json({
        message: "User successfully created!",
        user: newUser
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});