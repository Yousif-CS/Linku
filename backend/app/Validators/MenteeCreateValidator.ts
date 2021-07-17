import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MenteeCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.jsonapi

  public schema = schema.create({
    first_name: schema.string({ trim: true, escape: true }, [rules.required()]),
    last_name: schema.string({ trim: true, escape: true }, [rules.required()]),
    password: schema.string({ trim: true, escape: true }, [rules.required(), rules.minLength(8)]),
    email: schema.string({ trim: true, escape: true }, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    industry_id: schema.number([
      rules.exists({ table: 'industries', column: 'id' }),
      rules.required(),
    ]),
    phone: schema.string({ trim: true, escape: true }, [rules.mobile()]),
    company: schema.string({ trim: true, escape: true }),
    role: schema.string({ trim: true, escape: true }),
  })

  public messages = {}
}
