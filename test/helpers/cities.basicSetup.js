const mongoose = require('mongoose');
const mongoDBService = require('../../src/services/mongo');

const basicSetup = () => {
  before((done) => { // eslint-disable-line no-undef
    mongoDBService.dbConnect()
      .once('open', () => done())
      .on('error', (error) => done(error));
  });
  beforeEach((done) => { // eslint-disable-line no-undef
    const collectionName = 'cities';
    mongoose.connection.db.listCollections({ name: collectionName })
      .next((error, collection) => {
        if (collection) {
          mongoose.connection.db.dropCollection(collectionName)
            .then(() => done())
            .catch((err) => done(err));
        } else {
          done(error);
        }
      });
  });

  after((done) => { // eslint-disable-line no-undef
    mongoDBService.dbClose()
      .then(() => done())
      .catch((err) => done(err));
  });
};

module.exports = basicSetup;
