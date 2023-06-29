const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//     adding to static assete
//     SSR
// });

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
