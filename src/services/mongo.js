const mongoose = require('mongoose');
const config = require('config');
const debug = require('debug')('server:debug');

const connectWithRetry = () => {
  debug(config.get('database'));
  mongoose.connect(config.get('database'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
    .then(() => {
      debug('Succesfully connected to database');
    })
    .catch((e) => {
      debug(e);
      setTimeout(connectWithRetry, 5000);
    });
};

const dbConnect = () => {
  mongoose.connect(config.get('database'), {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false,
  });
  return mongoose.connection;
};

const dbClose = () => mongoose.disconnect();

module.exports = {
  connectWithRetry,
  dbConnect,
  dbClose,
};
