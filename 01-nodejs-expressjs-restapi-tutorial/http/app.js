const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/v1/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('New connection...');
// });

server.listen(8080);

console.log('Listening on port 8080...');
