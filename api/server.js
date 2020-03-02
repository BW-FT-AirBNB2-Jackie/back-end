const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users.router');
const restricted = require('../middleware/authenticate-middleware');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);

server.get('/', (req, res) => {
  res.send('<h1>Its working</h1>');
});

module.exports = server;
