const express = require('express');

// Create web server and listen on port 3000
// Use express to create a web server
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});