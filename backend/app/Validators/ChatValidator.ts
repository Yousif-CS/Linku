import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChatValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    identifier: schema.string({ trim: true, escape: true }, [
      rules.required(),
      rules.unique({ table: 'chats', column: 'identifier' }),
    ]),
    project_id: schema.number([rules.exists({ table: 'projects', column: 'id' })]),
  })

  public messages = {}
}
