exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        { username: 'james hatfield', password: 'metallica' },
        { username: 'angus young', password: 'acdc' },
        { username: 'maynard keenan', password: 'tool' }
      ]);
    });
};
