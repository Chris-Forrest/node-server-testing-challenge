const db = require("../data/dbConfig");

function find(){
    return db("ventureBros")
};

function findById(id){
    return db("ventureBros").where({ id }).first()
};

async function create(data){
    const [id] = await db("ventureBros").insert(data)
    return findById(id)
};

async function update(id, data){
    await db("ventureBros").where({ id }).update(data)
    return findById(id)
};

function remove(id){
    return db("ventureBros").where({ id }).del()
};

module.exports = {
    find,
    findById,
    create,
    update,
    remove,
}