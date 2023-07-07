const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World from Node.js');
    } else {
        res.write('Using some other domain');
    }

    res.end();
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
