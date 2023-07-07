const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hi!');
});

app.get('/example', (req, res) => {
    res.send('Route example');
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    // res.send('Route with parameters');
    res.send(`${req.params.name} : ${req.params.age}`);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
