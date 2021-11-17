const express = require("express");
const UserData = require("./user")
const data = require("./user.data");


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my HomePage")
})
app.get("/user", (req, res) => {
    res.send(UserData)
})
app.get("/data", (req, res) => {
    res.send(data)
})

app.listen(6969, function() {
    console.log("Listening on port 6969")
})