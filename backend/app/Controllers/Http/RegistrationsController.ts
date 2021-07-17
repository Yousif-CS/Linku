import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mentee from 'App/Models/Mentee'
import Mentor from 'App/Models/Mentor'
import MenteeCreateValidator from 'App/Validators/MenteeCreateValidator'
import MentorCreateValidator from 'App/Validators/MentorCreateValidator'
import User from 'App/Models/User'

export default class RegistrationsController {
  public async mentee({ request, response }: HttpContextContract) {
    const input = await request.validate(MenteeCreateValidator)

    const user = await User.create(input)

    await Mentee.create({ user_id: user.id })

    return response.created()
  }

  public async mentor({ request, response }: HttpContextContract) {
    const input = await request.validate(MentorCreateValidator)

    const user = await User.create(input)

    await Mentor.create({ user_id: user.id })

    return response.created()
  }
}
