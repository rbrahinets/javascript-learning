const EventEmmiter = require('events');

const emitter = new EventEmmiter();

// Register a listener
emitter.on('messageLogged', (e) => {
    console.log('Listener called', e);
});

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

// Raise: logging (data: message)
