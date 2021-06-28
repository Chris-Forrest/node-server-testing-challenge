const express = require("express");
const castrouter = require("./cast/cast-router");

const server = express()

server.use(express.json());

server.use("/ventureBros", castrouter)
server.get("/", (req,res) => {
    res.json({ 
        message:"Welcome",
    })
});

server.use((err,req,res,next) => {
    console.log(err)
    res.status(500).json({ message: "OOPS something went wrong"})
});

module.exports = server