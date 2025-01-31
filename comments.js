//create web server
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const commentData = [
    {
        id: 1,
        comment: "This is the first comment"
    },
    {
        id: 2,
        comment: "This is the second comment"
    },
    {
        id: 3,
        comment: "This is the third comment"
    }
];
app.get('/comments', (req, res) => {
    res.send(commentData);
});
app.post('/comments', (req, res) => {
    const newComment = req.body;
    commentData.push(newComment);
    res.send(commentData);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});