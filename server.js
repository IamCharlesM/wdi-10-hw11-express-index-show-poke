const express = require("express");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js")


app.listen(port, function () {
    console.log("Server is runnin' on port 3000")
});

app.get ("/" , (req,res) => {
    res.send("Welcome to the Pokemon App!")
})

app.get ("/pokemon/", (req,res) => {
    res.send(pokemon)
})