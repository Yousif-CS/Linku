/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/project/', 'ProjectsController.post')
Route.get('/project/:id', 'ProjectsController.get')
Route.post('/task/', 'TasksController.postTask')
Route.put('/task/:id', 'TasksController.putTask')
Route.get('/task/:id', 'TasksController.getTask')
Route.post('/register/mentor', 'RegistrationsController.mentor')
Route.post('/register/mentee', 'RegistrationsController.mentee')
Route.post('/login', 'AuthController.create')
Route.post('/logout', 'AuthController.destroy')
