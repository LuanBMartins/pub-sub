//index.js
const app = require('./app');
const appWs = require('./socket/app-ws');

const server = app.listen(3060, () => {
    console.log(`Publish run!`);
})
