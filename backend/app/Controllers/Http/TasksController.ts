// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Task from 'App/Models/Task'
import TaskValidator from 'App/Validators/TaskValidator'

export default class TasksController {
  public async postTask({ auth, request, response }) {
    await auth.use('api').authenticate()
    const input = await request.validate(TaskValidator)
    const newTask = await Task.create(input)

    const task = await Task.find(newTask.id)
    return response.created(task)
  }

  public async putTask({ auth, request, params, response }) {
    await auth.use('api').authenticate()
    const input = await request.validate(TaskValidator)
    const task = await Task.findOrFail(params.id)
    if (input.title) {
      task.title = input.title
    }
    if (input.description) {
      task.description = input.description
    }
    if (input.label) {
      task.label = input.label
    }
    if (input.mentee_id) {
      task.mentee_id = input.mentee_id
    }
    await task.save()
    return response.ok()
  }

  public async getTask({ auth, params }) {
    await auth.use('api').authenticate()
    const task = await Task.findOrFail(params.id)
    return task
  }

  public async deleteTask({ auth, params, response}) {
    await auth.use('api').authenticate()
    const task = await Task.findOrFail(params.id)
    await task.delete()
    return response.ok()
  }
}
