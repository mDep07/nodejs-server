import express from 'express';
const app = express();

import books from './books.js';
import authors from './authors.js';

app.use(books);
app.use(authors);

app.get('/*', (req, res) => {
    res.redirect('/')
});

export default app;
