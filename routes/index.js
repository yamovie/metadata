const router = require('express').Router();
const movieRoutes = require('./movie.routes');
const genreRoutes = require('./genre.routes');
const providerRoutes = require('./provider.routes');

router.get('/status', (req, res) => res.send('OK'));
router.get('/movies', movieRoutes);
router.get('/genres', genreRoutes);
router.get('/providers', providerRoutes);

module.exports = router;
