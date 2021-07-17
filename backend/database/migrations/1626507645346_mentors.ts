import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Mentors extends BaseSchema {
  protected tableName = 'mentors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      table.integer('user_id').references('id').inTable('users').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
