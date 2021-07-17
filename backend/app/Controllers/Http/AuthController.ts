import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import AuthCreateValidator from 'App/Validators/AuthCreateValidator'

export default class AuthController {
  private createValidator: AuthCreateValidator
  /**
   * Create a token for login
   */
  public async create({ auth, request, response }) {
    const input = await request.validate(AuthCreateValidator)

    const email = input.email
    const password = input.password

    try {
      const token = await auth.use('api').attempt(email, password)
      const user = await User.findByOrFail('email', email)
      return {
        token: token.token,
        type: token.type,
        id: user.id,
      }
    } catch {
      return response.badRequest('Invalid Credentials')
    }
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }
}
