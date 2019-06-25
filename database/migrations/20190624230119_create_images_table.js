exports.up = function(knex, Promise) {
    return knex.schema.createTable('images', tbl => {
        tbl
        .increments()
  
        tbl
        .string('photo')
        .notNullable()
  
        tbl
        .integer('party_id')
        .unsigned()
        .references('id')
        .inTable('parties')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('images')
  };
  