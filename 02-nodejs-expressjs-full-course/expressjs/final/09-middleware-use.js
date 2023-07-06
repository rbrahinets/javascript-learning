const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');

const app = express();

const PORT = 8080;

// req => middleware => res

// app.use('/api', logger);
app.use([authorize, logger]);

app.get('/', logger, (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
