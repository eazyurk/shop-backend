const express = require('express');
const app = express();
const api = require('./api');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Shop backend'
    })
});

app.use('/api/v1', api);

module.exports = app;