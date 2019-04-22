exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('history', function(table) {
      table.increments('id').primary()
      table.string('accountId')
      table.string('name')
      table.string('region')
      table.string('created')
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('history')])
}
