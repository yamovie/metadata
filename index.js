const { PORT, ENV } = require('./config/vars');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

// Open Mongoose connection
mongoose.connect();

// Listen to requests
app.listen(PORT, () => console.info(`Server started on port ${PORT} - ${ENV}`));

module.exports = app;
