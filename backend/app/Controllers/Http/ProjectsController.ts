// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Project from 'App/Models/Project'
import ProjectValidator from 'App/Validators/ProjectValidator'

export default class ProjectsController {
  public async postProject({ auth, request, response }) {
    await auth.use('api').authenticate()
    const input = await request.validate(ProjectValidator)
    const newProject = await Project.create(input)
    return response.created(newProject)
  }
}
