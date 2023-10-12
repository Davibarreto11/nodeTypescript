import { v4 as uuidv4 } from 'uuid'

import type IUsersRepository from '../IUsersRepository'
import type ICreateUserDTO from 'modules/users/dtos/ICreateUserDTO'

import User from '../../infra/typeorm/entities/User'

class UsersRepository implements IUsersRepository {
  private readonly users: User[] = []

  public async findById (id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id)

    return findUser
  }

  public async findByEmail (email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email)

    return findUser
  }

  public async create (userData: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: uuidv4(), userData })

    this.users.push(user)

    return user
  }

  public async save (user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id)

    this.users[findIndex] = user

    return user
  }
}
export default UsersRepository
