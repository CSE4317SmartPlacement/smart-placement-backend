const router = require("express").Router()
const jwt = require("jsonwebtoken")


let users = [
    {
        "email": "test1@mavs.uta.edu",
        "password": "asdf1234",
    },
    {
        "email": "test2@mavs.uta.edu",
        "password": "asdf1234",
    },
    {
        "email": "test3@mavs.uta.edu",
        "password": "asdf1234",
    }
]

router.post("/login", (req, res, next) => {
    const { email, password } = req.body

    const user = users.find((item) => item.email == email && item.password == password)

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