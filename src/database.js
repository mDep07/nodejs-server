import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
let db;

async function createConnection() {
    const adapter = new FileAsync('db.json');
    db = await lowdb(adapter);
    db.default({ books: [], authors: [] }).write();
}

const getConnection = () => db;

export {
    createConnection,
    getConnection
}