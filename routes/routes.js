// const url = require('url');
// const util = require('util');

const books = JSON.stringify([
  { id: 1, name: 'Book 1', author_id: 1 },
  { id: 2, name: 'Book 2', author_id: 2 },
  { id: 3, name: 'Book 3', author_id: 3 },
  { id: 4, name: 'Book 4', author_id: 4 },
  { id: 5, name: 'Book 5', author_id: 5 },
  { id: 6, name: 'Book 6', author_id: 6 }
]);

const authors = JSON.stringify([
  { id: 1, name: 'Author 1' },
  { id: 2, name: 'Author 2' },
  { id: 3, name: 'Author 3' },
  { id: 4, name: 'Author 4' },
  { id: 5, name: 'Author 5' },
  { id: 6, name: 'Author 6' }
]);

const Routes = (path, res) => {
    const url = new URL(path, 'http://localhost:8000/');
    const params = url.searchParams;
    switch (url.pathname) {
        case '/':
            res.setHeader('Content-Type', 'text/plain');
            res.status = 200;
            res.end('NodeJs Server');
            break;
        case '/books':
            res.setHeader('Content-Type', 'application/json');
            res.status = 200;
            const bookId = params.get('id');
            if(bookId) {
                const listBooks = JSON.parse(books);
                const book = listBooks.find(({ id }) => id === parseInt(bookId));
                if(!book) {
                    res.end(JSON.stringify({ error: 'Book not found' }));
                } else {
                    res.end(JSON.stringify(book));
                }

            } else {
                res.end(books);
            }

            break;
        case '/authors':
            res.setHeader('Content-Type', 'application/json');
            res.status = 200;
            
            const authorId = params.get('id');
            if(authorId) {
                const listAuthors = JSON.parse(authors);
                const author = listAuthors.find(({ id }) => id === parseInt(authorId));
                if(!author) {
                    res.end(JSON.stringify({ error: 'Author not found' }));
                } else {
                    res.end(JSON.stringify(author));
                }

            } else {
                res.end(authors);
            }
            
            break;
        default:
            res.setHeader('Content-Type', 'application/json');
            res.status = 404;
            res.end(JSON.stringify({ error: 'Resource not found' }));
    }
};

module.exports = Routes;
