import { v4 as uuidv4 } from 'uuid';
import { getConnection } from '../database.js';

import moment from 'moment';

import { getAuthorBook } from './author.controller.js';

const getBooks = (req, res) => {
    const db = getConnection();
    const { books } = db.data;

    const listBooks = books.map(book => {
        const authors = book.authors.map(author => getAuthorBook(author.author_id));
        return {...book, authors}
    })

    res.json({ listBooks });
}

const getBook = (req, res) => {
    const db = getConnection();
    const { books } = db.data;

    const bookId = req.params.id;
    const book = books.find(({ id }) => id === bookId);

    if(!book) {
        res.json({ error: 'Book not found.' });
        return;
    }
    
    const authors = book.authors.map(author => getAuthorBook(author.author_id));

    res.json({book: {...book, authors}});
}

const createBook = async (req, res) => {
    const db = getConnection();
    const { books } = db.data;

    const { title, authors, publication_date, description } = req.body;
    if(!title || !publication_date) {
        res.json({ error: '"title", and "publication_date" are required.' });
        return;
    }

    const listAuthors = JSON.parse(authors || '[]');
    if(!listAuthors.length) {
        res.json({ error: 'One "author" is required.' });
        return;
    }

    if(!listAuthors.every(({author_id}) => getAuthorBook(author_id))) {
        res.json({ error: 'One or more "Author/s" are not valid.' });
        return;
    }

    const date = moment(publication_date, 'yyyy-MM-DD');

    const newBook = { id: uuidv4(), title, description, publication_date: date, authors: listAuthors };

    books.push(newBook);
    await db.write();
    
    res.json({ book: newBook });
}

const deleteBook = async (req, res) => {
    const db = getConnection();
    const { books } = db.data;

    const bookId = req.params.id;
    const bookIndex = books.findIndex(({id}) => id === bookId);

    if(bookIndex === -1) {
        res.json({ error: 'Book not found.' });
        return;
    }

    books.splice(bookIndex, 1);
    await db.write();
    
    res.json({ message: 'Book deleted correctly' });
}

const updateBook = async (req, res) => {
    const db = getConnection();
    const { books } = db.data;
    const bookId = req.params.id;

    const { title, author_id, publication_date, description } = req.body;
    const book = books.find(({id}) => id === bookId);

    if(!book) {
        res.json({ error: 'Book not found.' });
        return;
    }

    const bookIndex = books.findIndex(({id}) => id === book.id);

    const updatedBook = {
        id: book.id,
        title: title || book.title,
        author_id: author_id || book.author_id, 
        publication_date: publication_date || book.publication_date,
        description: description || book.description
    }

    books.splice(bookIndex, 1, updatedBook);
    await db.write();
    
    res.json({ message: 'Book updated correctly' });
}

const getAuthorBooks = (authorId) => {
    const db = getConnection();
    const { books } = db.data;

    return books.filter(({ author_id }) => author_id === authorId);
}


export {
    getBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook,
    getAuthorBooks
}