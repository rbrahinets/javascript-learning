const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page');
    } else if (req.url === '/about') {
        // blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }

        res.end('About page');
    } else {
        res.end('Error page');
    }
});

server.listen(8080, () => {
    console.log('Server listening on port 8080...');
});
