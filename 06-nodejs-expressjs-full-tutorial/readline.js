const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);
const sum = num1 + num2;

// console.log(`${num1} + ${num2} = ${sum}`);

read.question(`What is ${num1} + ${num2} ? \n`, (userInput) => {
    // console.log(userInput);

    if (Number(userInput.trim()) === sum) {
        read.close();
    } else {
        read.setPrompt('Incorrect response, please try again... \n');
        read.prompt();
        read.on('line', (userInput) => {
            if (Number(userInput.trim()) === sum) {
                read.close();
            } else {
                read.setPrompt(
                    'Your answer is incorrect, please try again... \n'
                );
                read.prompt();
            }
        });
    }
});

read.on('close', () => {
    console.log('Good!');
});
