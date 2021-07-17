import { DateTime } from 'luxon'
import { BaseModel, column, hasOne} from '@ioc:Adonis/Lucid/Orm'
import { HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Project from 'App/Models/Project'

export default class Mentee extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

@hasOne(() => User, {
  foreignKey: 'user_id',
  localKey: 'id',
})
public user_id: HasOne<typeof User>

@hasOne(() => Project, {
  foreignKey: 'project_id',
  localKey: 'id',
})
public project_id: HasOne<typeof Project>
}
