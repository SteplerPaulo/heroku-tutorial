const express = require('express');
const app = express();
const port = 3000;

// Basic route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route with a parameter
app.get('/health-check', (req, res) => {
  res.send(`Server is running...`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
