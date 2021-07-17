import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export enum TaskStatus {
  Todo,
  InProgress,
  Done,
}

export default class Tasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })

      // Attributes
      table.string('title').notNullable()
      table.string('description').nullable()
      table.string('label').nullable()
      table
        .enum('status', [TaskStatus.Todo, TaskStatus.InProgress, TaskStatus.Done])
        .defaultTo(TaskStatus.Todo)

      // Foreign keys
      table.integer('mentee_id').references('id').inTable('mentees').nullable()
      table.integer('project_id').references('id').inTable('projects').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
