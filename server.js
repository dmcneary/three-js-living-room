const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('pub'))

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(3000, () => console.log('Ready to load room @ localhost:3000'));