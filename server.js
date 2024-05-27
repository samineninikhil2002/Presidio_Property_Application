const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let users = [];
let properties = [];

// Register endpoint
app.post('/register', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send('User registered successfully!');
});

// Post property endpoint
app.post('/properties', (req, res) => {
    const property = req.body;
    property.id = properties.length + 1; // Simple ID generation
    properties.push(property);
    res.status(201).send('Property posted successfully!');
});

// Get properties endpoint
app.get('/properties', (req, res) => {
    res.json(properties);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
