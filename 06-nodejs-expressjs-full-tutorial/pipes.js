const fs = require('fs');
const zlib = require('zlib');

let readStream = fs.createReadStream('./example.txt', 'utf-8');
let writeStream = fs.createWriteStream('example2.txt');
readStream.pipe(writeStream);

const gzip = zlib.createGzip();
writeStream = fs.createWriteStream('example2.txt.gz');
readStream.pipe(gzip).pipe(writeStream);

const gunzip = zlib.createGunzip();
readStream = fs.createReadStream('./example2.txt.gz');
writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);
