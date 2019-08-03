const router = require('express').Router();
const movieRoutes = require('./movie.routes');
const genreRoutes = require('./genre.routes');
const providerRoutes = require('./provider.routes');

router.use('/status', (req, res) => res.send('OK'));
router.use('/movies', movieRoutes);
router.use('/genres', genreRoutes);
router.use('/providers', providerRoutes);

module.exports = router;
