// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Task from "App/Models/Task"
import TaskValidator from "App/Validators/TaskValidator"

export default class TasksController {
    public async postTask({auth, request, response}) {
        await auth.use('api').authenticate()
        const input = await request.validate(TaskValidator)
        const newProject = await Task.create(input)
        return response.created(newProject)
    }

    public async putTask({auth, request, response}) {
        await auth.use('api').authenticate()
        const input = await request.validate(TaskValidator)
        const task = await Task.findOrFail(request.param('id')) 
        if (input.tite){
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
        return response.status(200)
    }

    public async getTask({auth, request, response}) {

    }
}
