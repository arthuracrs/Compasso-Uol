const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    }
})

module.exports = mongoose.model('Client', clientSchema)
