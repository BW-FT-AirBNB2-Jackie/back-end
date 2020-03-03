exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('landowners')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('landowners').insert([
        {
          username: 'harry potter',
          password: 'pass',
          email: 'hp@hogwarts.com'
        },
        {
          username: 'ron weasley',
          password: 'pass1',
          email: 'rw@hogwarts.com'
        },
        {
          username: 'hermione granger',
          password: 'pass2',
          email: 'hg@hogwarts.com'
        }
      ]);
    });
};
