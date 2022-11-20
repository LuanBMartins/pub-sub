const queue = require('../redis-connect');

module.exports = (channel, content) =>  {
    queue.publish(channel, content)
};
