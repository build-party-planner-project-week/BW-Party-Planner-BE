
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parties', tbl => {
      tbl
      .increments('party_id')

      tbl
      .string('title')
      .notNullable()

      tbl
      .integer('guests')
      .notNullable()

      tbl
      .string('theme')
      .notNullable()

      tbl
      .string('date')
      .notNullable()

      tbl
      .integer('budget')
      .notNullable()

      tbl
      .integer('user_id')
      .unsigned()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('parties')
};
