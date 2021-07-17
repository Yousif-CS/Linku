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
}
