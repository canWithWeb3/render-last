const router = require("express").Router()
const Category = require("../models/category")

router.get("/", async (req, res) => {
    const categories = await Category.find()

    return res.render("home", {
        title: "Home Title",
        categories: categories
    })
})

module.exports = router