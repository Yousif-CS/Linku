import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Chats extends BaseSchema {
  protected tableName = 'chats'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      // Attributes
      table.string('identifier').unique().notNullable()

      // Foreign keys
      table.integer('project_id').references('id').inTable('projects').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
