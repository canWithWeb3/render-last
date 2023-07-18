const express = require("express")
const app = express()

app.set("view engine", "ejs")

const userRoutes = require("./routes/user")

app.use(userRoutes)

app.listen(3000, () => console.log("Server listening on port: 3000"))