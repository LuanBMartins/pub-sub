//queue.js
const redis = require('redis');
const client = redis.createClient();
client.connect();

client.on("error", (error) => {
    console.error(error);
});

async function publish(channel, value) {
    console.log('Message sent!');
    return client.publish(channel, JSON.stringify(value));
}

async function subscribe(channelSubscribed, callback) {
    client.subscribe(channelSubscribed, (message, channel) => {
        callback(message);
    });
}

module.exports = {
    publish,
    subscribe
}