const mongoose = require('mongoose');
const config = require("config")

const connectWithRetry = () => {
  mongoose.connect(config.get('database'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
    .then(() => {
      console.log('Succesfully connected to database');
    })
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

const dbConnect = () => {
    mongoose.connect(config.get('database'), { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})
    return mongoose.connection
  }
  
const dbClose= ()=> {
    return mongoose.disconnect();
  }

module.exports = {
  connectWithRetry,
  dbConnect,
  dbClose
};
