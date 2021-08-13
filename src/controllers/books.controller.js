import { v4 as uuidv4 } from 'uuid';
import { getConnection } from '../database.js';

import moment from 'moment';



const getBooks = (req, res) => {
    const db = getConnection();
    const { books } = db.data;
    res.json({ books });
}

const createBook = async (req, res) => {
    const db = getConnection();
    const { books } = db.data;

    const { title, author_id, publication_date, description } = req.body;
    if(!title || !author_id || !publication_date) {
        res.json({ error: '"title", "author_id" and "publication_date" are required.' });
        return;
    }

    const date = moment(publication_date, 'yyyy-MM-DD');

    const newBook = { id: uuidv4(), title, author_id, description, publication_date: date };

    books.push(newBook);
    await db.write();
    
    res.json({ book: newBook });
}

export {
    getBooks,
    createBook
}