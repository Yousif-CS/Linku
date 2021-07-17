import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Chat from 'App/Models/Chat'
import ChatValidator from 'App/Validators/ChatValidator'
import Chats from 'Database/migrations/1626545133319_chats'

export default class ChatsController {
  public async post({ auth, request, response, bouncer }: HttpContextContract) {
    // Authenticate user
    await auth.use('api').authenticate()

    // Make sure they are mentors
    await bouncer.authorize('isMentor')

    // Parse input
    const input = await request.validate(ChatValidator)

    const chat = await Chat.create(input)

    await chat.load('project')
    await chat.project.load('mentor')
    await chat.project.mentor.load('user')
    await chat.project.load('mentees')
    await Promise.all(
      chat.project.mentees.map(async (mentee) => {
        await mentee.load('user')
      })
    )

    return response.created(chat.toJSON())
  }

  public async get({ auth, request, bouncer }: HttpContextContract) {
    // Authenticate user
    await auth.use('api').authenticate()

    // Make sure they are mentors
    await bouncer.authorize('isMentor')

    const chat = await Chat.findOrFail(request.param('id'))
    await chat.load('project')
    await chat.project.load('mentor')
    await chat.project.mentor.load('user')
    await chat.project.load('mentees')
    await Promise.all(
      chat.project.mentees.map(async (mentee) => {
        await mentee.load('user')
      })
    )

    return chat.toJSON()
  }
}
