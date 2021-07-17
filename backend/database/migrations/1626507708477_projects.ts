import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projects extends BaseSchema {
  protected tableName = 'projects'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      // Attributes
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.dateTime('end_date').nullable()

      // Foreign keys
      table.integer('mentor_id').references('id').inTable('mentors').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
