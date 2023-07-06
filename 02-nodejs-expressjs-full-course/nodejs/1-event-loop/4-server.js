const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Reauest event');
    res.end('Hello World');
});

server.listen(8080, () => {
    console.log('Server is listening port 8080...');
});
