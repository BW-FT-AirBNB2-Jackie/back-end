exports.up = function(knex) {
  return knex.schema.createTable('bookings', bookings => {
    bookings.primary(['users_id', 'listings_id']);

    bookings
      .integer('users_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    bookings
      .integer('listings_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('listings')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('bookings');
};
