const router = require('express').Router();
const movieController = require('../controllers/movie.controller');

router.get('/', movieController.readAll);
router.get('/:id', movieController.readOne);
router.get('/genre/:id', movieController.readByGenre);
router.get('/recommend', movieController.readByRecommendation);
router.get('/search', movieController.readBySearchAll);
router.get('/search/title', movieController.readBySearchTitle);
router.get('/search/cast', movieController.readBySearchCast);
router.get('/search/crew', movieController.readBySearchCast);

module.exports = router;
