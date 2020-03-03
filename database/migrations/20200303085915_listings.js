exports.up = function(knex) {
  return knex.schema.createTable('listings', listings => {
    listings.increments();

    listings.string('location', 1000).notNullable();
    listings.string('description', 1000).notNullable();
    listings.integer('price').notNullable();
    listings.string('image').notNullable();
    listings.string('start_date', 128).notNullable();
    listings.string('end_date', 128).notNullable();
    listings.integer('distance');

    // Foreign Key
    listings
      .integer('landowners_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('landowners')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfItExists('listings');
};
