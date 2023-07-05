const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PlayerModel = require('./models/player.model');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/secret', (req, res) => {
    res.sendFile(path.join(__dirname, 'secret.html'));
});

app.post('/secret', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }

    const model = new PlayerModel({
        name: req.body.name.toLowerCase(),
        card: `${req.body.number}_of_${req.body.suit}`,
    });
    model
        .save()
        .then((doc) => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }

            res.status(201).send(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

app.get('/:param*', (req, res) => {
    const name = req.url.slice(1).toLowerCase();

    if (name === 'deleteall') {
        PlayerModel.deleteMany({})
            .then((doc) => {
                res.send('database reset');
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    } else {
        PlayerModel.findOne({ name: name })
            .then((doc) => {
                if (!doc) {
                    return res.status(404).send('Page Not Found');
                }

                const card = `${doc.card}.png`;
                res.sendFile(path.join(`${__dirname}/cards/${card}`));
            })
            .catch((err) => {
                console.error('Error ', err);
                res.status(500).json(err);
            });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
