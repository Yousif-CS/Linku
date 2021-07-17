import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mentor from 'App/Models/Mentor'
import User from 'App/Models/User'
import AuthCreateValidator from 'App/Validators/AuthCreateValidator'

export default class AuthController {
  private createValidator: AuthCreateValidator
  /**
   * Create a token for login
   */
  public async create({ auth, request, response }) {
    const input = await request.validate(this.createValidator)

    const email = input.email
    const password = input.password

    try {
      const token = await auth.use('api').attempt(email, password)
      const user = await User.findByOrFail('email', email)

      await user.load('industry')

      const mentor = await Mentor.findBy('user_id', user.id)

      const isMentor = mentor ? true : false

      return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        industry: user.industry.toJSON(),
        company: user.company,
        role: user.role,
        is_mentor: isMentor,
        token: token.token,
        type: token.type,
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
