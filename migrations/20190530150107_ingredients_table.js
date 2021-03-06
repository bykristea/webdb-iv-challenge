exports.up = async function(knex) {
    await knex.schema.createTable('ingredients', (tbl) => {
        tbl.increments('id');
        tbl.string('ingredient_name').notNullable().unique();
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('ingredients');
};