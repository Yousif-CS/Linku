import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MentorCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

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
    phone: schema.string({ trim: true, escape: true }, [rules.required(), rules.mobile()]),
    company: schema.string({ trim: true, escape: true }, [rules.required()]),
    role: schema.string({ trim: true, escape: true }, [rules.required()]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
