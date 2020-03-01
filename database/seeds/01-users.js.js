exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        { name: 'james hatfield', password: 'metallica' },
        { name: 'angus young', password: 'acdc' },
        { name: 'maynard keenan', password: 'tool' }
      ]);
    });
};
