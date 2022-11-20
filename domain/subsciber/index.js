//subscriber1.js
const queue = require('../redis-connect');

module.exports = (channel, ws) => {
    queue.subscribe(channel, message => {
        ws.send(`${message}`);
    })
}

