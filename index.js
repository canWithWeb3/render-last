const express = require("express")
const app = express()

const path = require("path");

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

const userRoutes = require("./routes/user")

app.use(userRoutes)

app.listen(3000, () => console.log("Server listening on port: 3000"))