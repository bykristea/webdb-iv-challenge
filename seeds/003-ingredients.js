
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Gulf Shrimp'},
        {ingredient_name: 'Queso Blanco Velveeta'},
        
      ]);
    });
};
