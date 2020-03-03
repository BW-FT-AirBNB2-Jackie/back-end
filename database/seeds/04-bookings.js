exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookings')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('bookings').insert([
        { users_id: 1, listings_id: 1 },
        { users_id: 2, listings_id: 2 },
        { users_id: 3, listings_id: 3 }
      ]);
    });
};
