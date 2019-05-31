
exports.up = async function(knex) {
  await
  knex.schema.createTable('recipes', (tbl) => {
      tbl.increments('id')
      tbl.string('recipe_name').notNullable();

      tbl.integer('dish_id').unsigned();
      tbl.foreign('dish_id').references('id').on('dishes');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipes');
};
