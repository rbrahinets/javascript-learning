const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('$', (err, files) => {
    if (err) {
        console.error('Error', err);
    } else {
        console.log('Result', files);
    } 
});
