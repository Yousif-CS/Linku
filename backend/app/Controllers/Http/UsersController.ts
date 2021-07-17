import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mentor from 'App/Models/Mentor'
import Mentee from 'App/Models/Mentee'

export default class UsersController {
  public async getProjects({ auth, request, response }: HttpContextContract) {
    await auth.use('api').authenticate()

    const user = auth.use('api').user!

    const mentor = await Mentor.query().preload('user', (query) => {
      query.where('users.id', user.id)
    })

    const mentee = await Mentee.query().preload('user', (query) => {
      query.where('users.id', user.id)
    })

    const projects =
      mentor.length > 0
        ? await mentor[0].related('project').query()
        : await mentee[0].related('project').query()

    return response.ok(projects)
  }
}
