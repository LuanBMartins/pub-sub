const WebSocket = require('ws');
const subscribe = require('../domain/subsciber')

function onError(ws, err) {
    console.error(`onError: ${err.message}`);
}

function onMessage(ws, data) {
    console.log(`🚀 ~ file: app-ws.js:9 ~ onMessage ~ data ${data}`)
    
    
    subscribe(`${data}`, ws)
    ws.send(`recebido!`);
}

function onConnection(ws, req) {
    ws.on('message', data => onMessage(ws, data));
    ws.on('error', error => onError(ws, error));
    console.log(`onConnection`);
}

module.exports = (server) => {
    const wss = new WebSocket.Server({
        server
    });

    wss.on('connection', onConnection);

    console.log(`App Web Socket Server is running!`);
    return wss;
}