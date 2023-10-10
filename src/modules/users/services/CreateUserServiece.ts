import { AppDataSource } from '../../../shared/infra/database'
import { hash } from 'bcryptjs'

import User from '../infra/typeorm/entities/User'

import AppError from '../../../shared/errors/AppError'

interface Request {
  name: string
  email: string
  password: string
}

class CreateUserService {
  async execute ({ name, email, password }: Request): Promise<User> {
    const usersRepository = AppDataSource.getRepository(User)

    const checkUserExists = await usersRepository.findOne({
      where: { email }
    })

    if (checkUserExists) {
      throw new AppError('Email address already used')
    }

    const hasgedPassword = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: hasgedPassword
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService