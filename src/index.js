require('dotenv').config();

const express = require('express');
const helmet = require('helmet');

const { APPLICATION_PORT } = require('./config/config');

const mongoDBService = require('./services/mongo');

const clientsRouter = require('./routes/clients.router');
const citiesRouter = require('./routes/cities.router');

mongoDBService.connectWithRetry();
const app = express();

app.use(helmet());
app.use(express.json());

app.use('/api/v1/clients', clientsRouter);
app.use('/api/v1/cities', citiesRouter);
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err);
  res.status(500).send('Ocorreu um erro!');
});
app.use((req, res) => {
  res.status(404).send('Esse lugar não foi encontrado!');
});

app.listen(APPLICATION_PORT, () => {
  console.log(`Running server on port: ${APPLICATION_PORT}`);
});
