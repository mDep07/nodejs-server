const express = require('express');
const app = express();

const books =[
    { id: 1, title: 'Book 1', author_id: 1 },
    { id: 2, title: 'Book 2', author_id: 2 },
    { id: 3, title: 'Book 3', author_id: 3 },
    { id: 4, title: 'Book 4', author_id: 4 },
    { id: 5, title: 'Book 5', author_id: 5 },
    { id: 6, title: 'Book 6', author_id: 6 }
];

app.get('/books', (req, res) => {
    res.json({ books });
});

module.exports = app;