const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_URI,
    MONGO_DB_NAME
} = require("../config/config")

const mongoose = require("mongoose")

const connectWithRetry = () => {
    mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URI}/${MONGO_DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => { console.log("Succesfully connected to database") })
        .catch(e => {
            console.log(e)
            setTimeout(connectWithRetry, 5000)
        })
}

module.exports = { connectWithRetry }
