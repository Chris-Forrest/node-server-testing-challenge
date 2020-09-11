const { table } = require("../dbConfig");

exports.up = async function(knex) {
    await knex.schema.createTable("ventureBros", (tbl) => {
        tbl.increments()
        tbl.text("name").notNullable()
    })
};

exports.down = async function(knex) {
        await knex.schema.dropTableIfExits("ventureBros")
};
