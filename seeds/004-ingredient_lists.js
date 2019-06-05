
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredient_lists').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_lists').insert([
        {ingredient_amount: '2.5', ingredient_id: '1', recipes_id: '1'},
        {ingredient_amount: '1', ingredient_id: '2', recipes_id: '2'},
       
      ]);
    });
};
