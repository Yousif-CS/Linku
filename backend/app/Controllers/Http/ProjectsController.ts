import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Project from 'App/Models/Project'
import ProjectValidator from 'App/Validators/ProjectValidator'
import Mentee from 'App/Models/Mentee'
import User from 'App/Models/User'
import Mentor from 'App/Models/Mentor'

export default class ProjectsController {
  public async post({ auth, request, bouncer, response }) {
    //Authenticate and validate input
    await auth.use('api').authenticate()
    const input = await request.validate(ProjectValidator)

    // Figure out if they are a mentor
    await bouncer.authorize('isMentor')

    // Get the user
    const user = await auth.use('api').user!

    // Get the mentor model
    const mentor = await Mentor.query().preload('user', (query) => {
      query.where('users.id', user.id)
    })

    // Search them by company (first preference)
    const menteesByCompany = await Mentee.query().preload('user', (query) => {
      query.where('users.company', user.company)
    })

    // Found more than one mentee, choose 1 by random!

    var mentee: Mentee | null = null

    if (menteesByCompany.length > 0) {
      mentee = menteesByCompany[Math.floor(Math.random() * menteesByCompany.length)]
    } else {
      // No mentees found by company, search them up by industry
      const menteesByIndustry = await Mentee.query().preload('user', (query) => {
        query.where('users.industry_id', user.industry_id)
      })
      // If There are not mentees by industry, return no content
      if (menteesByIndustry.length === 0) return response.status(204)

      // Fetch a random mentee by industry
      mentee = menteesByIndustry[Math.floor(Math.random() * menteesByIndustry.length)]
    }

    // Create a project
    const projectInfo = {
      name: input.name,
      description: input.description,
      end_date: input.end_date,
      mentor_id: mentor[0].id,
    }

    const newProject = await Project.create(projectInfo)

    // Attach the project to mentee
    await mentee.related('project').associate(newProject)
    // Attach mentor to project
    await newProject.related('mentor').associate(mentor[0])
    // return the chosen mentee
    await mentee.load('project')
    await mentee.load('user')

    return mentee.toJSON()
  }

  public async get({ auth, bouncer, request, response }: HttpContextContract) {
    //Authenticate user
    await auth.use('api').authenticate()

    // Make sure they are either mentees enrolled in the project or mentors of the project
    await bouncer.authorize('viewProject')

    // Get the project info
    const project = await Project.findOrFail(request.param('id'))

    // Get the tasks
    await project.load('tasks')
    await project.load('mentor')
    await project.load('mentees')
    await project.load('chat')
    await Promise.all(
      project.mentees.map(async (mentee) => {
        await mentee.load('user')
      })
    )
    return response.ok(project.toJSON())
  }
}
