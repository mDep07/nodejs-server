import express from 'express';
const app = express();

import { getBooks } from '../controllers/books.controller.js';


//Get all books
app.get('/books', getBooks);

//Get a book by Id
app.get('/book/:id', (req, res) => {
    const bookId = req.params.id;
    const book = books.find(({ id }) => id === bookId);

    res.json({ book });
});

//Create new book
app.post('/book', (req, res) => {
    const {title, author_id} = req.body;
    const newBook = { id: uuidv4(), title, author_id };

    books.push(newBook);
    
    res.json({ book: newBook });
});

//Get all books by author
app.get('/books/author/:id', (req, res) => {
    res.json({ books });
});

export default app;