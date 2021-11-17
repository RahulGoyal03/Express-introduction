const express = require("express");
const UserData = require("./user")

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my HomePage")
})
app.get("/user", (req, res) => {
    res.send(UserData)
})

app.listen(6969, function() {
    console.log("Listening on port 6969")
})