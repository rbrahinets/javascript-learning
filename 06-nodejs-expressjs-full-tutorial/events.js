const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('sum', (num1, num2) => {
    console.log('sum event has occured');
    console.log(num1 + num2);
});

eventEmitter.emit('sum', 1, 3);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

const rostik = new Person('Rostik');
const irynka = new Person('Irynka');

rostik.on('name', () => {
    console.log(`My name is ${rostik.name}`);
});

irynka.on('name', () => {
    console.log(`My name is ${irynka.name}`);
});

rostik.emit('name');
irynka.emit('name');
