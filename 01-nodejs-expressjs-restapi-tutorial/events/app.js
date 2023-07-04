const EventEmmiter = require('events');
const Logger = require('../modules/logger');

const logger = new Logger();

// Register a listener
logger.on('messageLogged', (e) => {
    console.log('Listener called', e);
});

logger.log('message');
