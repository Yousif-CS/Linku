import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { TaskStatus } from 'Database/migrations/1626509901461_tasks'

export default class TaskValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   */
  public schema = schema.create({
    title: schema.string({ trim: true, escape: true }, [rules.required()]),
    description: schema.string.optional({ trim: true, escape: true }),
    label: schema.string.optional({ trim: true, escape: true }),
    status: schema.enum.optional([TaskStatus.Todo, TaskStatus.InProgress, TaskStatus.Done]),
    mentee_id: schema.number.optional([rules.exists({ table: 'mentees', column: 'id' })]),
    project_id: schema.number([rules.exists({ table: 'projects', column: 'id' })]),
  })

  public messages = {
    'title.required': 'You must provide a title',
  }
}
