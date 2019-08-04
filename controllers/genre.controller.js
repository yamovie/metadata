const JSONStream = require('JSONStream');
const { Genre } = require('../models');

const readAll = (req, res) => {
  Genre.find({})
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

const readOne = (req, res) => {
  Genre.findById(req.params.id)
    .then(doc => res.json(doc))
    .catch(err => console.error(err));
};

const create = genre => Genre.create(genre);

const insertMany = genres => Genre.insertMany(genres, { ordered: false });

const count = () => Genre.estimatedDocumentCount();

module.exports = {
  count,
  readAll,
  readOne,
  create,
  insertMany,
};
