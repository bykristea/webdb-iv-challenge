
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish_name: 'Tacos'},
        {id: 2, dish_name: 'Queso'},
       
      ]);
    });
};
