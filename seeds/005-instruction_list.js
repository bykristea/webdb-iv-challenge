
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('instruction_lists').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instruction_lists').insert([
        {instruction_step: '1', instructions: 'Take two flour tortillas', recipe_id: '1'},
        {instruction_step: '2', instructions: 'Heat skillet and grill shrimp until pink all over. Add Chili Lime seasoning.', recipe_id: '1'},
        {instruction_step: '1', instructions: 'Cut cheese into chunks. Place in sauce pan and melt over low heat', recipe_id: '2'},
        
      ]);
    });
};
