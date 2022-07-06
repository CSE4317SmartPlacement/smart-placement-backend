const router = require("express").Router()
const jwt = require("jsonwebtoken")


let users = [
    {
        "username": "test1@mavs.uta.edu",
        "password": "asdf1234",
    },
    {
        "username": "test2@mavs.uta.edu",
        "password": "asdf1234",
    },
    {
        "username": "test3@mavs.uta.edu",
        "password": "asdf1234",
    }
]

router.post("/login", (req, res, next) => {
    const { username, password } = req.body

    const user = users.find((item) => item.username == username && item.password == password)


    if (user) {
        var token = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "10m" })
        return res.status(200).json({
            message: "Success",
            token: token,
            user: user,
        })
    }

    return res.status(401).json({
        message: "Login Failed. Invalid username or password"
    })
})


module.exports = router