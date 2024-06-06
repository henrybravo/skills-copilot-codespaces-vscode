// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.json({ message: 'Created a new comment' });
});

// Get all comments
app.get('/comments', (req, res) => {
  res.json({ message: 'Get all comments' });
});

// Get a comment by ID
app.get('/comments/:id', (req, res) => {
  res.json({ message: 'Get a comment by ID' });
});

// Update a comment by ID
app.put('/comments/:id', (req, res) => {
  res.json({ message: 'Update a comment by ID' });
});

// Delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  res.json({ message: 'Delete a comment by ID' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});