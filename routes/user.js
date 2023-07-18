const router = require("express").Router()

router.get("/", (req, res) => {
    return res.render("home", {
        title: "Home Title"
    })
})

module.exports = router