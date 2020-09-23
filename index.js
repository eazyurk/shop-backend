const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('hello test');
});

app.listen('3000');