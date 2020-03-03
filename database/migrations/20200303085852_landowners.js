exports.up = function(knex) {
  return knex.schema.createTable('landowners', landowners => {
    landowners.increments();

    landowners
      .string('username', 128)
      .notNullable()
      .unique();

    landowners.string('password', 128).notNullable();
    landowners
      .string('email', 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('landowners');
};
