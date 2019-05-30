exports.up = async function(knex) {
    await knex.schema.createTable('ingredient_lists', (tbl) => {
        tbl.increments();
        tbl.float('ingredient_amount').unsigned();

        tbl.integer('ingredient_id').unsigned();
        tbl.foreign('ingredient_id').references('id').on('ingredients');
        tbl.integer('recipes_id').unsigned();
        tbl.foreign('recipes_id').references('id').on('recipes');
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('ingredients_list');
};