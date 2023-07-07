const express = require('express');
const path = require('path');

const PORT = 8080;

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
