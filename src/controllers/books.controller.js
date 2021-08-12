import { v4 as uuidv4 } from 'uuid';

const books = [
    { id: uuidv4(), title: 'Book 1', author_id: 1 },
    { id: uuidv4(), title: 'Book 2', author_id: 2 },
    { id: uuidv4(), title: 'Book 3', author_id: 3 },
    { id: uuidv4(), title: 'Book 4', author_id: 4 },
    { id: uuidv4(), title: 'Book 5', author_id: 5 },
    { id: uuidv4(), title: 'Book 6', author_id: 6 }
];

const getBooks = (req, res) => {
    res.json({ books });
}

export {
    getBooks
}