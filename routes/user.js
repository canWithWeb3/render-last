const router = require("express").Router()

router.get("/", (req, res) => {
    return res.send("Home Page LAST changed123")
})

module.exports = router