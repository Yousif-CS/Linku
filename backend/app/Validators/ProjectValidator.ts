import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProjectValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   */
  public schema = schema.create({
    name: schema.string({ trim: true, escape: true }, [rules.required()]),
    description: schema.string({ trim: true, escape: true }, [rules.required()]),
    end_date: schema.date.optional(),
    user_id: schema.number([rules.exists({ table: 'users', column: 'id' })]),
  })

  public messages = {
    'name.required': 'You must provide a project name',
    'description.required': 'You must provide a project description',
  }
}
