import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mentee from 'App/Models/Mentee'
import Mentor from 'App/Models/Mentor'
import MenteeCreateValidator from 'App/Validators/MenteeCreateValidator'
import MentorCreateValidator from 'App/Validators/MentorCreateValidator'
import User from 'App/Models/User'
import Industries from 'Database/migrations/1626487266183_industries'
import Industry from 'App/Models/Industry'

export default class RegistrationsController {
  public async mentee({ request, response }: HttpContextContract) {
    const input = await request.validate(MenteeCreateValidator)

    const user = await User.create(input)

    const mentee = await Mentee.create({ user_id: user.id })
    const industry = await Industry.findOrFail(input.industry_id)
    await mentee.related('user').associate(user)
    await user.related('industry').associate(industry)

    return response.created()
  }

  public async mentor({ request, response }: HttpContextContract) {
    const input = await request.validate(MentorCreateValidator)

    const user = await User.create(input)

    const mentor = await Mentor.create({ user_id: user.id })
    const industry = await Industry.findOrFail(input.industry_id)
    await mentor.related('user').associate(user)
    await user.related('industry').associate(industry)

    return response.created()
  }
}
