const express = require('express');
const auth = require('./routes/auth');
const people = require('./routes/people');

const app = express();

const PORT = 8080;

// static assets
app.use(express.static('../methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use('/login', auth);
app.use('/api/people', people);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
