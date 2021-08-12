import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
let db;

const __dirname = dirname(fileURLToPath(import.meta.url));

async function createConnection() {
    const file = join(__dirname, 'db.json');
    const adapter = new JSONFile(file);
    db = new Low(adapter);
    db.data = { books: [], authors: [] };
    await db.write()
}

const getConnection = () => db;

export {
    createConnection,
    getConnection
}