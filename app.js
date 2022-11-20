//app.js
const express = require('express');

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const publish = require('./domain/publish')

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

app.use(helmet());

app.use(express.json());

app.use(morgan('dev'));

app.post('/publish', (req, res, next) => {
    publish(req.body.channel, req.body.content)
    res.send('SUCCESS!')
});

module.exports = app;