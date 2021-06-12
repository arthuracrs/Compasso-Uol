module.exports = {
  APPLICATION_PORT: process.env.APPLICATION_PORT || 3000,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_IP: process.env.MONGO_IP || 'mongodb',
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
};
