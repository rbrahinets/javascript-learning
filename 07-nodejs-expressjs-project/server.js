const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(errorHandler);

app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`);
});
