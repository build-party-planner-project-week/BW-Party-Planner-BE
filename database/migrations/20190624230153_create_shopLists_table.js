exports.up = function(knex, Promise) {
    return knex.schema.createTable('shopLists', tbl => {
        tbl
        .increments()
  
        tbl
        .string('item')
        .notNullable()
  
        tbl
        .integer('party_id')
        .unsigned()
        .references('id')
        .inTable('parties')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shopLists')
  };
  