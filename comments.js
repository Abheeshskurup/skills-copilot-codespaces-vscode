//Create web server
const express = require('express');
const app = express();
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a list of comments
let comments = [
  { 
    id: 1,
    username: 'Alice',
    comment: 'I love this website!'
  },
  { 
    id: 2,
    username: 'Bob',
    comment: 'This website sucks!'
  }
];

// Get all comments
app.get('/api/comments', (req, res) => {
  res.send(comments);
});

// Add a new comment
app.post('/api/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    username: req.body.username,
    comment: req.body.comment
  };
  comments.push(comment);
  res.send(comment);
});

// Delete a comment
app.delete('/api/comments/:id', (req, res) => {
  const index = comments.findIndex(comment => comment.id === parseInt(req.params.id));
  if (index !== -1) {
    comments.splice(index, 1);
  }
  res.send();
});

// Update a comment
app.put('/api/comments/:id', (req, res) => {
  const index = comments.findIndex(comment => comment.id === parseInt(req.params.id));
  if (index !== -1) {
    comments[index].username = req.body.username;
    comments[index].comment = req.body.comment;
  }
  res.send(comments[index]);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});