const JSONStream = require('JSONStream');
const { Provider } = require('../models');

const readAll = (req, res) => {
  Provider.find({})
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

const readByMonetization = (req, res) => {
  Provider.find({ monetization_types: req.params.type })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

const insertMany = providers => Provider.insertMany(providers, { ordered: false });

const count = () => Provider.estimatedDocumentCount();

module.exports = {
  readAll,
  readByMonetization,
  insertMany,
  count,
};
