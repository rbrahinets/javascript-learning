const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    // console.log(req.method);

    const url = req.url;

    console.log(url);

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About page</h1>');
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyles);
    } else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(homeImage);
    } else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(homeLogic);
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Error 404</h1>');
        res.write('<h2>Page not found!</h2>');
    }

    res.end();
});

server.listen(8080);
