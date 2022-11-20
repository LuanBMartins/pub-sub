//index.js
const app = require('./app');
const appWs = require('./socket/app-ws');

const server = app.listen(3000, () => {
    console.log(`Publish run!`);
})
