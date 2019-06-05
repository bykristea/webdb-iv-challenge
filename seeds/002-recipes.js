
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Shrimp', dish_id: '1'},
        {recipe_name: 'Queso Blanco', dish_id: '2'},
       
      ]);
    });
};
