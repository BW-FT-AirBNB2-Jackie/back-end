exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { username: 'test', password: 'test', email: 'test@email.com' },
        {
          username: 'james hatfield',
          password: 'metallica',
          email: 'jh@email.com'
        },
        { username: 'angus young', password: 'acdc', email: 'ay@email.com' },
        { username: 'maynard keenan', password: 'tool', email: 'mk@email.com' }
      ]);
    });
};
