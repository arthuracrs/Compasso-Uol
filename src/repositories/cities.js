const cityModel = require("../models/city.js")

module.exports = {
    save: async(name, state) => {
        const city = new cityModel({
            name,
            state
        })

        await city.save()

        return city
    },
    find: async(query) => {
        const city = await cityModel.find(query)

        return city
    },
    update: async(id, body) => {
        const city = await cityModel.findByIdAndUpdate(id, body, { new: true })

        return city
    },
    destroy: async(id) => {
        const city = await cityModel.findByIdAndDelete(id)

        return city
    }
}
