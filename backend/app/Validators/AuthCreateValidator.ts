import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public reporter = validator.reporters.jsonapi

  public schema = schema.create({
    email: schema.string({ trim: true, escape: true }, [rules.required(), rules.email()]),
    password: schema.string({ trim: true, escape: true }, [rules.required()]),
  })

  public messages = {
    'email.required': 'You must provide an email',
    'email.email': 'Must be a valid email',
  }
}
