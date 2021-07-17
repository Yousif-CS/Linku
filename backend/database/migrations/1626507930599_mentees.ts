import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Mentees extends BaseSchema {
  protected tableName = 'mentees'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.integer('user_id').references('id').inTable('users').notNullable()
      //table.integer('project_id').references('id').inTable('project').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
