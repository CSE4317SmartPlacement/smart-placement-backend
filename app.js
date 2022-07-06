const express = require("express")
const app = express()

//Middlewares
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const authRoute = require("./routes/auth-route")

app.use("/api/v1", authRoute)

module.exports = app