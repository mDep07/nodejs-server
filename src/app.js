import express, { urlencoded, json } from 'express';
const app = express();
import 'moment/locale/es.js';

import { createConnection } from './database.js';

import routes from './routes/index.js';

const port = 8000;

//Middleware
app.use(urlencoded({ extended: false }));
app.use(json());

//Configuración global de rutas
app.use(routes);

createConnection();
app.listen(port, () => console.log(`👍 Server running at http://localhost:${port}`));