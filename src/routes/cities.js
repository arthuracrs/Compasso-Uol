const express = require("express")

const citiesControllers = require("../controllers/cities.js")

const router = express.Router()

router.get('/cities', citiesControllers.getOne)

router.post('/', citiesControllers.create)

router.put('/', citiesControllers.update)

router.delete('/', citiesControllers.destroy)

module.exports = router