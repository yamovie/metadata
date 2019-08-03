const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('../routes');

/**
 * Express instance
 * @public
 */
const app = express();

// Request logging
app.use(morgan('combined'));

// Parse body params and attach them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// Secur apps by setting HTTP headers
app.use(helmet());

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Mount api routes
app.use('/', routes);

module.exports = app;
