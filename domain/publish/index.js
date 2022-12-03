const queue = require('../redis-connect');

module.exports = (channel, content) =>  {
    console.log("🚀 ~ file: index.js:4 ~ content", content)
    console.log("🚀 ~ file: index.js:4 ~ channel", channel)
    queue.publish(channel, content)
};
