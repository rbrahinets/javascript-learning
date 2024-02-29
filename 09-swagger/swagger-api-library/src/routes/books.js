const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send([
        {
            id: 1,
            title: 'Harry Potter',
        },
    ]);
});

router.get('/:id', (req, res) => {
    const book = {
        id: 1,
        title: 'Harry Potter',
    };

    if (!book) {
        return res.sendStatus(404);
    }

    res.status(200).send(book);
});

router.post('/', (req, res) => {
    try {
        return res.status(201).send();
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.put('/:id', (req, res) => {
    res.status(200).send(
        {
            id: 1,
            title: 'Ring',
        },
    );
});

router.delete('/:id', (req, res) => {
    res.sendStatus(200)
});

module.exports = router;
