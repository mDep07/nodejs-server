import express from 'express';
const app = express();

import books from './books';
import authors from './authors';

app.use(books);
app.use(authors);

app.get('/*', (req, res) => {
    res.redirect('/')
});

export default app;
