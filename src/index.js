require("dotenv").config()

const express = require("express")

const mongoDBService = require("./services/mongo")

const clientsRouter = require("./routes/clients")
const citiesRouter = require("./routes/cities")

mongoDBService.connectWithRetry()

const app = express()

app.use(express.json())

app.use('/api/v1/clients', clientsRouter)
app.use('/api/v1/cities', citiesRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Running server on port: ${port}`)
})
