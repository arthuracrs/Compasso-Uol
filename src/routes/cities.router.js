const express = require('express');

const citiesController = require('../controllers/cities.controller');
const citiesValidators = require('../validators/cities.validators');

const router = express.Router();

router.get('/',
  citiesValidators.chain.getMany,
  citiesValidators.result,
  citiesController.getMany);

router.post('/',
  citiesValidators.chain.create,
  citiesValidators.result,
  citiesController.create);

router.put('/:cityId',
  citiesValidators.chain.update,
  citiesValidators.result,
  citiesController.update);

router.delete('/:cityId',
  citiesValidators.chain.destroy,
  citiesValidators.result,
  citiesController.destroy);

module.exports = router;
