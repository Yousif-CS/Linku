import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Mentor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public user_id: number

  @hasOne(() => User, {
    localKey: 'user_id',
  })
  public user: HasOne<typeof User>
}
