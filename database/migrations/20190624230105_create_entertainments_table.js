
exports.up = function(knex, Promise) {
  return knex.schema.createTable('entertainments', tbl => {
      tbl
      .increments()

      tbl
      .string('name')
      .notNullable()

      tbl
      .integer('party_id')
      .unsigned()
      .references('id')
      .inTable('parties')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entertainment')
};
