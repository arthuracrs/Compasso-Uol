const express = require('express');

const clientsController = require('../controllers/clients.controller');

const router = express.Router();

router.get('/', clientsController.getOne);
router.post('/', clientsController.create);
router.put('/:clientId', clientsController.update);
router.delete('/:clientId', clientsController.destroy);

module.exports = router;
