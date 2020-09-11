const express = require("express");

const server = express()

server.use(express.json());

server.get("/", (req,res) => {
    res.json({ message: "Welcome to your API"})
});

server.use((err,req,res,next) => {
    console.log(err)
    res.status(500).json({ message: "OOPS something went wrong"})
});

module.exports = server