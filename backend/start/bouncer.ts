/**
 * Contract source: https://git.io/Jte3T
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */
import User from 'App/Models/User'
import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import Mentor from 'App/Models/Mentor'
import Project from 'App/Models/Project'
import Mentee from 'App/Models/Mentee'
/*
|--------------------------------------------------------------------------
| Bouncer Actions
|--------------------------------------------------------------------------
|
| Actions allows you to separate your application business logic from the
| authorization logic. Feel free to make use of policies when you find
| yourself creating too many actions
|
| You can define an action using the `.define` method on the Bouncer object
| as shown in the following example
|
| ```
| 	Bouncer.define('deletePost', (user: User, post: Post) => {
|			return post.user_id === user.id
| 	})
| ```
|
|****************************************************************
| NOTE: Always export the "actions" const from this file
|****************************************************************
*/
export const { actions } = Bouncer.define('isMentor', async (user: User) => {
  const mentor = await Mentor.query().preload('user', (query) => {
    query.where('users.id', user.id)
  })
  return mentor.length > 0
}).define('viewProject', async (user: User) => {
  const mentor = await Mentor.query().preload('user', (query) => {
    query.where('users.id', user.id)
  })
  if (mentor.length === 0) {
    // if not a mentor then mentee
    const mentee = await Mentee.query().preload('user', (query) => {
      query.where('users.id', user.id)
    })

    // Is mentee a participant in the project?
    const project = await mentee[0].related('project').query()
    if (!project) return false
  }

  const project = await Project.query().preload('mentor', (query) => {
    query.where('projects.mentor_id', mentor[0].id)
  })
  // Is mentor a participant in the project
  if (project.length === 0) return false

  return true
})

/*
|--------------------------------------------------------------------------
| Bouncer Policies
|--------------------------------------------------------------------------
|
| Policies are self contained actions for a given resource. For example: You
| can create a policy for a "User" resource, one policy for a "Post" resource
| and so on.
|
| The "registerPolicies" accepts a unique policy name and a function to lazy
| import the policy
|
| ```
| 	Bouncer.registerPolicies({
|			UserPolicy: () => import('App/Policies/User'),
| 		PostPolicy: () => import('App/Policies/Post')
| 	})
| ```
|
|****************************************************************
| NOTE: Always export the "policies" const from this file
|****************************************************************
*/
export const { policies } = Bouncer.registerPolicies({})
