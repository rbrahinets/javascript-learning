const express = require('express');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const authorRouter = require('./routes/authors.js');
const bookRouter = require('./routes/books.js');
const specs = require('./swaggerConfig');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/authors', authorRouter);
app.use('/books', bookRouter);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
