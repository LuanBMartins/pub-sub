//index.js
const app = require('./app');
const appWs = require('./socket/app-ws');

const server = app.listen(3030, () => {
    console.log(`Subscribre run!`);
})

appWs(server)