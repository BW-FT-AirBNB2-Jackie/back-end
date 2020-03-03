const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../routes/users.router');
const landownersRouter = require('../routes/landowners-router');
const listingsRouter = require('../routes/listings-router');

const restricted = require('../middleware/authenticate-middleware');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/landowners', landownersRouter);
server.use('/api/listings', listingsRouter);

server.get('/', (req, res) => {
  res.send('<h1>Its working</h1>');
});

module.exports = server;
