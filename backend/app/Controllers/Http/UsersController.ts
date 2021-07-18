import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mentor from 'App/Models/Mentor'
import Mentee from 'App/Models/Mentee'

export default class UsersController {
  public async getProjects({ auth, request, response }: HttpContextContract) {
    await auth.use('api').authenticate()

    const user = auth.use('api').user!

    const mentor = await Mentor.findBy('user_id', user.id)

    console.log(user)
    console.log(mentor)

    const mentee = await Mentee.findBy('user_id', user.id)
    console.log(mentee)

    if (mentor) {
      const projects = await mentor.related('project').query()
      return response.ok(projects)
    } else if (mentee) {
      const projects = await mentee.related('project').query()
      return response.ok(projects)
    }
    return response.noContent()
  }
}
