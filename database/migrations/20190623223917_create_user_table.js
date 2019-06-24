

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (tbl) => {
    tbl
    .increments()

    tbl
    .string('username', 255)
    .unique()
    .notNullable()

    tbl
    .string('password', 255)
    .notNullable()

    tbl
    .timestamp('createdAt').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
