import express from 'express';
const app = express();
import { v4 as uuidv4 } from 'uuid';

const books =[
    { id: uuidv4(), title: 'Book 1', author_id: 1 },
    { id: uuidv4(), title: 'Book 2', author_id: 2 },
    { id: uuidv4(), title: 'Book 3', author_id: 3 },
    { id: uuidv4(), title: 'Book 4', author_id: 4 },
    { id: uuidv4(), title: 'Book 5', author_id: 5 },
    { id: uuidv4(), title: 'Book 6', author_id: 6 }
];

//Get all books
app.get('/books', (req, res) => {
    res.json({ books });
});

//Get an book by Id
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