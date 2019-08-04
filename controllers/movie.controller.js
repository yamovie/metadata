const JSONStream = require('JSONStream');
const { Movie } = require('../models');
const { PAGE_SIZE } = require('../config/vars');

const readAll = (req, res) => {
  const skip = req.query.offset || 0;
  const limit = req.query.limit || PAGE_SIZE;
  Movie.find({}, null, { skip, limit })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

const readOne = (req, res) => {
  Movie.findOne({ _id: req.params.id })
    .then(doc => res.json(doc))
    .catch(err => console.error(err));
};

const readByGenre = (req, res) => {
  const skip = req.query.offset || 0;
  const limit = req.query.limit || PAGE_SIZE;
  Movie.find({ genres: req.params.id }, null, { skip, limit })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

const readByRecommendation = (req, res) => {
  const skip = req.query.offset || 0;
  const limit = req.query.limit || PAGE_SIZE;
  Movie.find(JSON.parse(req.body), null, { skip, limit })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

const create = movie => Movie.create(movie);

const insertMany = movies => Movie.insertMany(movies, { ordered: false });

const readBySearchAll = (req, res) => {
  const skip = req.query.offset || 0;
  const limit = req.query.limit || PAGE_SIZE;
  const value = new RegExp(req.query.searchInput, 'gi');
  Movie.find({
    $or: [
      { title: value },
      { 'credits.cast.name': value },
      { 'credits.crew.name': value },
    ],
  }, null, { skip, limit })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

const readBySearchTitle = (req, res) => {
  const skip = req.query.offset || 0;
  const limit = req.query.limit || PAGE_SIZE;
  Movie.find({ title: new RegExp(req.query.searchInput, 'gi') }, null, { skip, limit })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

const readBySearchCast = (req, res) => {
  const skip = req.query.offset || 0;
  const limit = req.query.limit || PAGE_SIZE;
  Movie.find({ 'credits.cast.name': new RegExp(req.query.searchInput, 'gi') }, null, { skip, limit })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

const readBySearchCrew = (req, res) => {
  const skip = req.query.offset || 0;
  const limit = req.query.limit || PAGE_SIZE;
  Movie.find({ 'credits.crew.name': new RegExp(req.query.searchInput, 'gi') }, null, { skip, limit })
    .cursor()
    .pipe(JSONStream.stringify())
    .pipe(res.type('json'));
};

module.exports = {
  readAll,
  readOne,
  readByGenre,
  readByRecommendation,
  create,
  insertMany,
  readBySearchAll,
  readBySearchTitle,
  readBySearchCast,
  readBySearchCrew,
};
