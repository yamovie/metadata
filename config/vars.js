require('dotenv').config();

module.exports = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO: {
    URI: process.env.DB_URI,
  },
  PAGE_SIZE: 20,
};
