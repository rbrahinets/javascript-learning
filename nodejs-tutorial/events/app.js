const EventEmmiter = require('events');

const emitter = new EventEmmiter();

// Register a listener
emitter.on('messageLogged', () => {
    console.log('Listener called');
});

// Raise an event
emitter.emit('messageLogged');
