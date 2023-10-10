import { AppDataSource } from '../../../../../shared/infra/database'
import { type Repository } from 'typeorm'

import type IUsersRepository from '../../../repositories/IUsersRepository'
import type ICreateUserDTO from '../../../dtos/ICreateUserDTO'

import User from '../entities/User'

class UsersRepository implements IUsersRepository {
  private readonly ormRepository: Repository<User>

  constructor () {
    this.ormRepository = AppDataSource.getRepository(User)
  }

  public async findById (id: string): Promise<User | null> {
    const user = await this.ormRepository.findOneBy({ id })

    return user
  }

  public async findByEmail (email: string): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: { email }
    })

    return user
  }

  public async create (
    userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData)

    await this.ormRepository.save(user)

    return user
  }

  public async save (user: User): Promise<User> {
    return await this.ormRepository.save(user)
  }
}

export default UsersRepository
