const mongoose = require('mongoose');
const paginate = require('../config/paginate');

const movieSchema = new mongoose.Schema(
  {
    jw_url: {
      type: String,
      required: true,
      unique: true,
    },
    jw_image_url: String,
    certification: String,
    original_language: String,
    original_title: String,
    overview: String,
    release_date: String,
    release_year: Number,
    runtime: Number,
    title: String,
    genres: [
      {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'JW_Genre',
      },
    ],
    credits: Object,
    ratings: Object,
    images: {
      poster: String,
      backdrops: [Object],
    },
    videos: [Object],
    offers: {
      buy: [
        {
          provider: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Provider',
          },
          hd: Object,
          sd: Object,
          fourk: Object,
        },
      ],
      rent: [
        {
          provider: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Provider',
          },
          hd: Object,
          sd: Object,
          fourk: Object,
        },
      ],
      stream: [
        {
          provider: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Provider',
          },
          hd: Object,
          sd: Object,
          fourk: Object,
        },
      ],
    },
  },
  { collection: 'movies' },
);

movieSchema.plugin(paginate);
movieSchema.index({ title: 'text', 'credits.crew.name': 'text', 'credits.cast.name': 'text' });

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
