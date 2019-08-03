const mongoose = require('mongoose');
const { env, mongo } = require('./vars');

// Set mongoose Promise to native Promise
mongoose.Promise = Promise;

mongoose.connection.on('connected', () => {
  console.info('Connected to Mongo');
});

// Exit app on error
mongoose.connection.on('error', err => {
  console.error(err);
  process.exit(-1);
});

// Print Mongoose logs in dev environment
if (env === 'development') mongoose.set('debug', true);

const connect = () => {
  mongoose.connect(mongo.uri, {
    keepAlive: true,
    useNewUrlParser: true
  })
  return mongoose.connection;
};

module.exports = { connect };
