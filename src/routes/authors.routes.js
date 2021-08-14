import express from 'express';
const app = express();

import { getAuthors, getAuthor, createAuthor, updateAuthor } from '../controllers/author.controller.js';


//Get all authors
app.get('/authors', getAuthors);

//Get an author by Id
app.get('/author/:id', getAuthor);

//Create new author
app.post('/author', createAuthor);

//Update a author
app.post('/author/:id', updateAuthor);

export default app;