// import { injectable, inject } from 'tsyringe'
import type User from '../infra/typeorm/entities/User'

import AppError from '../../../shared/errors/AppError'
import type IUsersRepository from '../repositories/IUsersRepository'
import type IHashProvider from '../providers/HashProvider/models/IHashProvider'

interface IRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  constructor (
    private readonly usersRepository: IUsersRepository,

    private readonly hashProvider: IHashProvider
  ) {}

  async execute ({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email)

    if (checkUserExists) {
      throw new AppError('Email address already used')
    }

    const hasgedPassword = await this.hashProvider.generateHash(password)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hasgedPassword
    })

    return user
  }
}

export default CreateUserService
