import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Project from 'App/Models/Project'
import Mentee from 'App/Models/Mentee'
export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public label: string

  @column()
  public status: number

  @column()
  public mentee_id: number

  @column()
  public project_id: number

  @hasOne(() => Project)
  public project: HasOne<typeof Project>

  @hasOne(() => Mentee)
  public mentee: HasOne<typeof Mentee>
}
