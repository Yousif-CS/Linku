import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Mentor from './Mentor'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @column()
  public description: string

  @column.dateTime()
  public end_date: DateTime

  @column()
  public mentor_id: number

  @belongsTo(() => Mentor, {
    foreignKey: 'mentor_id',
  })
  public mentor: BelongsTo<typeof Mentor>
}
