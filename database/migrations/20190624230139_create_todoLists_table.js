exports.up = function(knex, Promise) {
    return knex.schema.createTable('todoLists', tbl => {
        tbl
        .increments()
  
        tbl
        .string('todo')
        .notNullable()

        tbl
        .integer('party_id')
        .unsigned()
        .references('id')
        .inTable('parties')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todoLists')
  };
  