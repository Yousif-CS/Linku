import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  hasManyThrough,
  HasManyThrough,
} from '@ioc:Adonis/Lucid/Orm'
import Project from 'App/Models/Project'
import Mentee from './Mentee'

export default class Chat extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public identifier: string

  @column()
  public project_id: number

  @belongsTo(() => Project, {
    foreignKey: 'project_id',
  })
  public project: BelongsTo<typeof Project>
}
