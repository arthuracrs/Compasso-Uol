const citiesrepositories = require("../repositories/cities.js")

module.exports = {
    create: async(req, res) => {
        try {
            const { name, state } = req.body

            const newCity = await citiesrepositories.save(name, state)

            return res.status(201).json({
                message: 'Cidade criada com sucesso!',
                data: newCity
            })
        }
        catch (e) {
            console.log(e)
            return res.status(400).json({
                message: 'Falhou'
            })
        }
    },
    getOne: async(req, res) => {
        try {
            const { cityName } = req.params

            const city = await citiesrepositories.find(cityName)

            return res.status(200).send({
                message: 'Cidade buscada com sucesso!',
                data: city
            })
        }
        catch (e) {
            console.log(e)
            return res.status(400).json({
                message: 'Falhou'
            })
        }
    },
    update: async(req, res) => {
        try {
            const { cityId } = req.params

            const city = await citiesrepositories.update(cityId, req.body)

            return res.status(200).send({
                message: 'Cidade atualizada com sucesso!',
                data: city
            })
        }
        catch (e) {
            console.log(e)
            return res.status(400).json({
                message: 'Falhou'
            })
        }
    },
    destroy: async(req, res) => {
        try {
            const { cityId } = req.params

            const city = await citiesrepositories.destroy(cityId)

            return res.status(200).send({
                message: 'Cidade deletada com sucesso!',
                data: city
            })

        }
        catch (e) {
            console.log(e)
            return res.status(400).json({
                message: 'Falhou'
            })
        }
    }
}
