const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
    // const readStream = fs.createReadStream('./static/index.html');
    // res.writeHead(200, { 'Content-type': 'text/html' });

    const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200, { 'Content-type': 'application/json' });

    // const readStream = fs.createReadStream('./static/example.jpg');
    // res.writeHead(200, { 'Content-type': 'image/jpg' });

    readStream.pipe(res);
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
