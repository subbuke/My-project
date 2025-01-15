const express = require('express');
const path = require("path");

// Create an instance of an Express application
const app = express();


// Define a port
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../frontend/my-app/build')));



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

