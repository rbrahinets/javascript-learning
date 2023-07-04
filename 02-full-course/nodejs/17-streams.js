const { createReadStream } = require('fs');

const stream = createReadStream(
    './content/big.txt',
    {
        highWaterMark: 90000, // control size
        // encoding: 'utf8'
    }
);

// default 64kb
// last buffer - remainder

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', err => console.log(err));
