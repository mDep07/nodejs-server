const express = require('express');
const app = express();

const authors = [
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' },
    { id: 3, name: 'Author 3' },
    { id: 4, name: 'Author 4' },
    { id: 5, name: 'Author 5' },
    { id: 6, name: 'Author 6' }
];

app.get('/authors', (req, res) => {
    res.json({ authors });
})

module.exports = app;