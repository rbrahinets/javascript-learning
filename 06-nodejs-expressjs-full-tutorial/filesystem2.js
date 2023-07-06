const fs = require('fs');

// fs.mkdir('node', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         fs.writeFile('./node/example.txt', '123', (err) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 fs.readFile('./node/example.txt', 'utf-8', (err, file) => {
//                     if (err) {
//                         console.error(err);
//                     } else {
//                         console.log(file);
//                     }
//                 });
//             }
//         });
//     }
// });

// fs.unlink('./node/example.txt', (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Successfully deleted the file');
//         fs.rmdir('node', (err) => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log('Successfully deleted the folder');
//             }
//         });
//     }
// });

fs.mkdir('node', (err) => {
    if (err) {
        console.error(err);
    } else {
        fs.writeFile('./node/example.txt', '123', (err) => {
            if (err) {
                console.error(err);
            } else {
                fs.readdir('node', 'utf-8', (err, files) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(files);

                        for (const file of files) {
                            fs.unlink(`./node/${file}`, (err) => {
                                if (err) {
                                    console.error(err);
                                } else {
                                    console.log(
                                        `Successfully deleted file '${file}'`
                                    );
                                }
                            });
                        }
                    }
                });
            }
        });
    }
});
