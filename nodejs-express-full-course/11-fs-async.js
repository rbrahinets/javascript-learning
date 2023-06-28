const { readFile, writeFile } = require('fs');

console.log('Start');

readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = res;

    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = res;

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}\n`,
            (err, res) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log(res);
            }
        );
    });
});

console.log('Done with this task');
console.log('Starting the next one');
