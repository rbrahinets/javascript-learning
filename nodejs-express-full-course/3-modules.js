// ComonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');

sayHi('Susan');
sayHi(john);
sayHi(peter);
