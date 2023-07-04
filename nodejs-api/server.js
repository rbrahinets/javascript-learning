const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const db = require('./config/db'); // local file

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

const client = new MongoClient(db.url);

client
    .connect()
    .then(() => {
        require('./app/routes')(app, client.db('nodejs'));

        app.listen(port, () => {
            console.log(`We are live on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
