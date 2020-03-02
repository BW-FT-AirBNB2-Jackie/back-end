exports.up = function(knex) {
  return knex.schema.createTable('listings', listings => {
    listings.increments();

    listings
      .varChar('location', 1000)
      .notNullable()
      .varChar('description', 1000)
      .notNullable()
      .integer('price')
      .notNullable()
      .string('image')
      .notNullable()
      .integer('distance');

    // Foreign Key
    listings
      .integer('landowners_id')
      .unassigned()
      .notNullable()
      .references(id)
      .inTable('landowners')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfItExists('listings');
};
