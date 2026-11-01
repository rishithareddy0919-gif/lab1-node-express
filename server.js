const express = require('express');

const app = express();

// Middleware to log HTTP status codes
app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
    });

    next();
});

// GET / - Welcome route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Node.js and Express Server!');
});

// GET /about - About route
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Rishitha',
        section: 'Aurora'
    });
});

// GET /time - Current date and time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// 404 - Unknown route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});