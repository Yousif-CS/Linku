import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasOne,
  HasMany,
  hasMany,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Mentor from './Mentor'
import Task from './Task'
import Mentee from './Mentee'
import Chat from './Chat'

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

  @hasOne(() => Chat, {
    foreignKey: 'project_id',
  })
  public chat: HasOne<typeof Chat>

  @hasMany(() => Mentee, {
    foreignKey: 'project_id',
  })
  public mentees: HasMany<typeof Mentee>

  @hasMany(() => Task, {
    foreignKey: 'project_id',
  })
  public tasks: HasMany<typeof Task>
}
