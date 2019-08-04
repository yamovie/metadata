require('../models');
const mongoose = require('mongoose');
const { ENV, MONGO } = require('./vars');


// Set mongoose Promise to native Promise
mongoose.Promise = Promise;

mongoose.connection.on('connected', () => {
  console.info('Connected to Mongo');
});

// Exit app on error
mongoose.connection.on('error', (err) => {
  console.error(err);
  process.exit(-1);
});

// Print Mongoose logs in dev environment
if (ENV === 'development') mongoose.set('debug', true);

mongoose.set('useCreateIndex', true);

const connect = () => {
  mongoose.connect(MONGO.URI, {
    keepAlive: true,
    useNewUrlParser: true,
  });
  return mongoose.connection;
};

module.exports = { connect };
