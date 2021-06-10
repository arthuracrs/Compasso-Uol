const clientModel = require("../models/client")

module.exports = {
    save: async(name, sex, birthDate, age, city) => {

        const client = new clientModel({ name, sex, birthDate, age, city })

        await client.save()

        return client
    },
    update: async(id, body) => {
        const client = await clientModel.findByIdAndUpdate(id, body, { new: true })
        
        return client
    },
    find: async(id) => {
        const client = await clientModel.findById(id)

        return client
    },
    destroy: async() => {

    }
}
