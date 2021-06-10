const express = require("express")

const clientsControllers = require("../controllers/clients.js")

const router = express.Router()

router.get('/:clientId', clientsControllers.getOne)

router.post('/', clientsControllers.create)

router.put('/:clientId', clientsControllers.update)

router.delete('/', clientsControllers.destroy)

module.exports = router