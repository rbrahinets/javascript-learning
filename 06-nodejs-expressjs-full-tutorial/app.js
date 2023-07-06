const { sum, PI, Math } = require('./sum');

console.log('Hello World from Node.js');
console.log(sum(1, 3));
console.log(PI);

const math = new Math();
math.PI = PI;

console.log(math);
console.log(math.PI);
