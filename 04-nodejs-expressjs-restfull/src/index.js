const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const peopleRoute = require('./routes/people');
const customersRoute = require('./routes/customer');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().getFullYear()} => ${req.originalUrl}`, req.body);
    next();
});

app.use(express.static('public'));
app.use(peopleRoute);
app.use(customersRoute);

// Handler for Error 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('Error 404! Resource Not Found!');
});

// Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
});

app.listen(PORT, () => console.info(`Server has started on port ${PORT}`));
