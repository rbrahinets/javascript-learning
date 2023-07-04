const os = require('os');

let totalMemmory = os.totalmem();
let freeMemmory = os.freemem();

console.log('Total Memory: ' + totalMemmory);

//Template string
// ES6 / ES2015 : ECMAScript 6
console.log(`Free Memory:  ${freeMemmory}`);
