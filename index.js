const dotenv = require("dotenv")
dotenv.config()

const app = require("./app")


app.listen(process.env.PORT, () => {
    console.log("SERVER IS RUNNING IN PORT:", process.env.PORT)
})