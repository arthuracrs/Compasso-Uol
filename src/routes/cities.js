const express = require("express")

const citiesControllers = require("../controllers/cities.js")

const router = express.Router()

router.get('/', citiesControllers.getOne)

router.post('/', citiesControllers.create)

router.put('/:cityId', citiesControllers.update)

router.delete('/:cityId', citiesControllers.destroy)

module.exports = router