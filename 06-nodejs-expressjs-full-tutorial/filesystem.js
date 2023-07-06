const fs = require('fs');

fs.writeFile('example.txt', 'This is an example.\n', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File successfully created');

        fs.readFile('example.txt', 'utf-8', (err, file) => {
            if (err) {
                console.error(err);
            } else {
                console.log(file);
            }
        });
    }
});

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Successfully renamed file');
//     }
// });

// fs.appendFile('example2.txt', 'Some data being appended \n', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Successfully append data to file');
//     }
// });

// fs.unlink('example2.txt', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Successfully deleted the file');
//     }
// });
