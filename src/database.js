import { Low, JSONFile } from 'lowdb'
let db;

async function createConnection() {
    const adapter = new JSONFile('db.json');
    db = new Low(adapter);
    db.data = { books: [], authors: [] };
    await db.write()
}

const getConnection = () => db;

export {
    createConnection,
    getConnection
}