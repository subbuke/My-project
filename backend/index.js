const express = require('express');
const path = require("path");

// Create an instance of an Express application
const app = express();

// Define a port
const PORT = process.env.PORT || 5000;

app.get('/Dashboard', (req, res) => {
    res.send("Dashboard");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

