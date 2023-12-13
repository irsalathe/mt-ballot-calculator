const express = require('express');
const path = require('path');
const app = express();

// Use express.urlencoded to parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// Serve your static HTML file at the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ballotform.html'));
});

// Handle form submission at the '/submit-ballot' route
app.post('/submit-ballot', (req, res) => {
  console.log(req.body); // Log the form data to the console for now
  res.send('Ballot submitted successfully!'); // Send a response back to the client
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
