import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasOne} from '@ioc:Adonis/Lucid/Orm'
import { HasOne } from '@ioc:Adonis/Lucid/Orm'
import Industry from 'App/Models/Industry'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @column()
  public phone: string

  @column()
  public comapny: string

  @column()
  public role: string

  @hasOne(() => Industry, {
    foreignKey: 'industry_id',
    localKey: 'id',
  })
  public industry_id: HasOne<typeof Industry>
}
