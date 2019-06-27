exports.up = function(knex, Promise) {
    return knex.schema.createTable('shopLists', tbl => {
        tbl
        .increments()
  
        tbl
        .string('item')
        .notNullable()


        tbl
        .string('price')
        .notNullable()
  
  
        tbl
        .integer('party_id')
        .unsigned()
        .references('party_id')
        .inTable('parties')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shopLists')
  };
  