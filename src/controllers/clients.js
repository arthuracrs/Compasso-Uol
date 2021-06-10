const clientRepository = require("../repositories/clients")

module.exports = {
    create: async(req, res) => {
        try {
            const { name, sex, birthDate, age, city } = req.body

            const newClient = await clientRepository.save(name, sex, birthDate, age, city)

            return res.status(201).json({
                message: 'Cliente criado com sucesso!',
                data: newClient
            })
        }
        catch (e) {
            console.log(e)
            return res.status(400).json({
                message: 'fail'
            })
        }

    },
    getOne: async(req, res) => {
        try {
            const { clientId } = req.params

            const client = await clientRepository.find(clientId)

            return res.status(200).json({
                message: 'Cliente buscado com sucesso!',
                data: client
            })

        }
        catch (e) {
            console.log(e)
            return res.status(400).json({
                message: 'fail'
            })
        }
    },
    update: async(req, res) => {
        try {
            const { clientId } = req.params
            
            const client = await clientRepository.update(clientId, req.body)

            return res.status(200).json({
                message: 'Cliente atualizado com sucesso!',
                data: client
            })

        }
        catch (e) {
            console.log(e)
            return res.status(400).json({
                message: 'fail'
            })
        }

    },
    destroy: (req, res) => {
        res.status(200).send('Cliente deletado com sucesso!')
    }
}
