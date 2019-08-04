const router = require('express').Router();
const providerController = require('../controllers/provider.controller');

router.get('/', providerController.readAll);
router.get('/:type', providerController.readByMonetization);

module.exports = router;
