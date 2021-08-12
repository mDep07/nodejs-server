const express = require('express');
const app = express();

app.use(require('./books'));
app.use(require('./authors'));

app.get('/*', (req, res) => {
    res.redirect('/')
});

module.exports = app;
