const express = require('express');

const citiesController = require('../controllers/cities.controller');

const router = express.Router();

router.get('/', citiesController.getMany);
router.post('/', citiesController.create);
router.put('/:cityId', citiesController.update);
router.delete('/:cityId', citiesController.destroy);

module.exports = router;
