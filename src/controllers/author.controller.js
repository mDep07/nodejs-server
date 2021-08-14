import { v4 as uuidv4 } from 'uuid';
import { getConnection } from '../database.js';

import moment from 'moment';

const getAuthors = (req, res) => {
    const db = getConnection();
    const { authors } = db.data;
    res.json({ authors });
}

const getAuthor = (req, res) => {
    const db = getConnection();
    const { authors } = db.data;

    const authorId = req.params.id;
    const author = authors.find(({ id }) => id === authorId);

    if(!author) {
        res.json({ error: 'Author not found.' });
        return;
    }

    res.json({ author });
}

const createAuthor = async (req, res) => {
    const db = getConnection();
    const { authors } = db.data;

    const { name, nationality, observation } = req.body;
    if(!name) {
        res.json({ error: '"name" is required.' });
        return;
    }

    if(existAuthor(name, authors)) {
        res.json({ error: 'There is an author with that name.' });
        return;
    }

    const newAuthor = { id: uuidv4(), name, nationality, observation };

    authors.push(newAuthor);
    await db.write();
    
    res.json({ author: newAuthor });
}

const updateAuthor = async (req, res) => {
    const db = getConnection();
    const { authors } = db.data;
    const authorId = req.params.id;

    const { name, nationality, observation } = req.body;
    const author = authors.find(({ id }) => id === authorId);

    if(!author) {
        res.json({ error: 'Author not found.' });
        return;
    }

    if(existAuthor(name, authors)) {
        res.json({ error: 'There is an author with that name.' });
        return;
    }

    const authorIndex = authors.findIndex(({ id }) => id === author.id);

    const updatedAuthor = {
        id: author.id,
        name: name || author.name,
        nationality: nationality || author.nationality,
        observation: observation || author.observation
    }

    authors.splice(authorIndex, 1, updatedAuthor);
    await db.write();
    
    res.json({ message: 'Author updated correctly' });
}

const getAuthorBook = (author_id) => {
    const db = getConnection();
    const { authors } = db.data;
    
    const author = authors.find(({ id }) => id === author_id);

    return author;
}

const existAuthor = (authorName, authors) => {
    return authors.find(({ name }) => name === authorName) ? true : false;
}

export {
    getAuthors,
    getAuthor,
    createAuthor,
    updateAuthor,
    getAuthorBook
}