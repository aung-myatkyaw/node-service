// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 6000; // Port on which the server will run (you can change this if needed)

// Define a route for the "plusone" API endpoint
app.get('/plusone/:number', (req, res) => {
  // Extract the number parameter from the URL
  const number = parseInt(req.params.number);

  // Check if the provided input is a valid number
  if (isNaN(number)) {
    return res.status(400).send('Invalid input. Please provide a valid number.');
  }

  // Increment the number by one
  const result = number + 1;

  // Return the incremented number as a plain numeric response
  res.send(result.toString()); // Send the number as a string
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
