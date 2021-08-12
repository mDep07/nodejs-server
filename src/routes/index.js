import express from 'express';
const app = express();

import books from './books.routes.js';
import authors from './authors.routes.js';

app.use(books);
app.use(authors);

app.get('/*', (req, res) => {
    res.redirect('/')
});

export default app;
