const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const usersRouter = require('../users/users.router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send('<h1>Its working</h1>');
});

module.exports = server;
