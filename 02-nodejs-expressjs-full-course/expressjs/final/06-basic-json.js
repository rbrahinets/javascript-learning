const express = require('express');
const { products } = require('./data');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
