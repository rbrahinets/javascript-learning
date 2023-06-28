// ComonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

sayHi('Susan');
sayHi(john);
sayHi(peter);
sayHi(data.singlePerson.name);
