const express = require('express');

const clientsController = require('../controllers/clients.controller');
const clientsValidators = require('../validators/clients.validators');

const router = express.Router();

router.get('/',
  clientsValidators.chain.getOne,
  clientsValidators.result,
  clientsController.getOne);

router.post('/',
  clientsValidators.chain.create,
  clientsValidators.result,
  clientsController.create);

router.put('/:clientId',
  clientsValidators.chain.update,
  clientsValidators.result,
  clientsController.update);

router.delete('/:clientId',
  clientsValidators.chain.destroy,
  clientsValidators.result,
  clientsController.destroy);

module.exports = router;
