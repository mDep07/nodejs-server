import express from 'express';
const app = express();

import { getBooks, getBook, createBook, deleteBook, updateBook } from '../controllers/books.controller.js';


//Get all books
app.get('/books', getBooks);

//Get a book by Id
app.get('/book/:id', getBook);

//Create new book
app.post('/book', createBook);

//Delete a book
app.delete('/book/:id', deleteBook);

//Update a book
app.post('/book/:id', updateBook);

//Get all books by author
app.get('/books/author/:id', (req, res) => {
    res.json({ books });
});

export default app;