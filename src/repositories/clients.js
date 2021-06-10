const clientModel = require("../models/client")
const cityModel = require("../models/city")

module.exports = {
    save: async(name, sex, birthDate, age, cityName) => {

        const city = await cityModel.findOne({ name: cityName })

        const client = new clientModel({ name, sex, birthDate, age, city: city._id })

        await client.save()

        return client
    },
    update: async(id, body) => {
        const client = await clientModel.findByIdAndUpdate(id, body, { new: true })

        return client
    },
    find: async(query) => {
        if (query.id) {
            query = { _id: query.id }
        }
        const client = await clientModel.find(query).populate('city')

        return client
    },
    destroy: async(id) => {
        const client = await clientModel.findOneAndDelete(id)

        return client
    }
}
