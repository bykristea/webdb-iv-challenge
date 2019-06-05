

exports.up = async function(knex) {
    await knex.schema.createTable('instruction_lists', (tbl) => {
        tbl.increments('id');
        tbl.integer('instruction_step').notNullable();
        tbl.string('instructions').notNullable();

        tbl.integer('recipe_id').unsigned();
        tbl.foreign('recipe_id').references('id').on('recipes');
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('instruction_lists');
};