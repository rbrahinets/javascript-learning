const express = require('express');
const { products } = require('./data');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map(
        (product) => {
            const { id, name, image } = product;
            return { id, name, product };
        }
    );

    res.json(newProducts);
});

app.get('/api/products/:id', (req, res) => {
    // console.log(req.params);

    const { id } = req.params;
    const singleProduct = products.find((product) => product.id === Number(id));

    if (!singleProduct) {
        res.status(404).send('Productd Does Not Exist!')
    }

    res.json(singleProduct);
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send('Hello World!');
});

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);

    const { search, limit } = req.query;

    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter(
            product => product.name.startsWith(search)
        );
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('No products matched your search');
        return res.status(200).json({ sucess: true, data: [] });
    }

    res.status(200).json(sortedProducts);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
