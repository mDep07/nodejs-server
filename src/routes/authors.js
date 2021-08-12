import express from 'express';
const app = express();

import { v4 as uuidv4 } from 'uuid';

const authors = [
    { id: uuidv4(), name: 'Author 1' },
    { id: uuidv4(), name: 'Author 2' },
    { id: uuidv4(), name: 'Author 3' },
    { id: uuidv4(), name: 'Author 4' },
    { id: uuidv4(), name: 'Author 5' },
    { id: uuidv4(), name: 'Author 6' }
];

app.get('/authors', (req, res) => {
    res.json({ authors });
})

export default app;