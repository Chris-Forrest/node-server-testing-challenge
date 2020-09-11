const express = require("express");
const Ventures = require("./cast-module");

const router = express.Router();

router.get("/", async (req,res,next) => {
    try{
        res.json(await Ventures.find())
    }catch(err){
        next(err)
    }
});

router.get("/:id", async (req,res,next) => {
    try{
        const venture = await Ventures.findById(req.params.id)
        if(!venture){
            return res.status(404).json({ message: "Venture team member not found."})
        }
        res.json(venture)
    }catch(err){
        next(err)
    }
});

router.post("/", async (req,res,next) => {
    try{
        const venture = await Ventures.create(req.body)
        res.status(201).json(venture)
    }catch(err){
        next(err)
    }
});

router.delete("/:id", async (req,res,next) => {
    try{
        const { id } = req.params
        await Ventures.remove(id)
        res.status(204).end()
    }catch(err){
        next(err)
    }
})

module.exports = router