import express, { urlencoded, json } from 'express';
const app = express();

import { createConnection } from './database';

import routes from './routes/index';

const port = 8000;

//Middleware
app.use(urlencoded({ extended: false }));
app.use(json());

//Configuración global de rutas
app.use(routes);

createConnection();
app.listen(port, () => console.log(`👍 Server running at http://localhost:${port}`));