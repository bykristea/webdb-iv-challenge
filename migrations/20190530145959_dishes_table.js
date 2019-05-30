
exports.up = async function(knex) {
  await knex.schema.createTable('dishes', (tbl) => {
      tbl.increments('id')
      tbl.string('dish_name').unique().notNullable()
  });
};

exports.down = async function() {
  await
  knex.schema.dropTableIfExists('dishes')
};
