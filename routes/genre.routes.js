const router = require('express').Router();
const genreController = require('../controllers/genre.controller');

router.get('/', genreController.readAll);
router.get('/:id', genreController.readOne);

module.exports = router;
