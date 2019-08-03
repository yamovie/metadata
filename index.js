const { port, env } = require('./config/vars');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

// Open Mongoose connection
mongoose.connect();

// Listen to requests
app.listen(port, () => console.info(`Server started on port ${port} - ${env}`));

module.exports = app;
