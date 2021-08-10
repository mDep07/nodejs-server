const url = require('url');
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

export default (path, res) => {
  console.log(url.parse(path, true));

  switch (path) {
    case '/':
      res.setHeader('Content-Type', 'text/plain');
      res.status = 200;
      res.end('NodeJs Server');
      break;
    case '/books':
      res.setHeader('Content-Type', 'application/json');
      res.status = 200;
      res.end(books);
      break;
    case '/authors':
      res.setHeader('Content-Type', 'application/json');
      res.status = 200;
      res.end(authors);
      break;
    default:
      res.setHeader('Content-Type', 'application/json');
      res.status = 404;
      res.end(JSON.stringify({ error: 'Resource not found' }));
  }
};
