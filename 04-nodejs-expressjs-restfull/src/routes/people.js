const express = require('express');

const router = express.Router();

router.get('/api/people', (req, res) => {
    res.send(`You have found people`);
});

// QueryString => query property on the request object
// localhost:8080/api/people/1?name=Rostik&age21
// Params property on the request object
// localhost:8080/api/people/1
router.get('/api/people/:id', (req, res) => {
    if (req.query.name) {
        res.send(`You have found a person ${req.query.name}`);
    } else {
        res.send(`You have found person wiht id ${req.params.id}`);
    }
});

router.get('/api/error', (req, res) => {
    throw new Error('This is a forced error!');
});

module.exports = router;
