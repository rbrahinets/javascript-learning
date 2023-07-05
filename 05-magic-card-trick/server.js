const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongo = require('./config/db');

const URI = process.env.MONGODB_URI || mongo.url;
const PORT = process.env.PORT || 8080;
const DB_NAME = process.env.DB_NAME;

const app = express();
const MongoClient = mongodb.MongoClient;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/secret', (req, res) => {
    res.sendFile(path.join(__dirname, 'secret.html'));
});

app.post('/secret', (req, res) => {
    MongoClient.connect(URI, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            console.error(err);
        } else {
            const db = client.db(DB_NAME);
            const collection = db.collection('names');
            const entry = {
                name: req.body.name.toLowerCase(),
                card: `${req.body.number}_of_${req.body.suit}`,
            };

            collection.insertOne(entry, (err, result) => {
                if (err) {
                    console.error(err);
                } else {
                    res.send('Inserted into database');
                }
            });

            db.close();
        }
    });
});

app.get('/:param*', (req, res) => {
    const name = req.url.slice(1).toLowerCase();

    MongoClient.connect(URI, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            console.error(err);
        } else {
            const db = client.db(DB_NAME);
            const collection = db.collection('names');

            if (name === 'deleteall') {
                collection.remove({});
                res.send('database reset');
            } else {
                collection.find({ name: name }).toArray((err, result) => {
                    if (err) {
                        console.error(err);
                    } else if (result.length) {
                        const card = `${result[result.length - 1].card}.png`;
                        res.sendFile(path.join(`${__dirname}/cards/${card}`));
                    } else {
                        res.sendStatus(404);
                    }

                    db.close();
                });
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
