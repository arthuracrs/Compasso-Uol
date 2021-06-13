const mongoose = require('mongoose');

const uri = `'mongodb://mongo:27017/docker-node-mongo',`

const connectWithRetry = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
    .then(() => { console.log('Succesfully connected to database'); })
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

module.exports = { connectWithRetry };
