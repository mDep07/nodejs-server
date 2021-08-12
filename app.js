const express = require('express');
const app = express();
const routes = require('./routes/index');

const port = 8000;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configuración global de rutas
app.use(routes);

app.listen(port, () => console.log(`👍 Server running at http://localhost:${port}`));