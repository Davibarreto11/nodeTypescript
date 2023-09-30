import { AppDataSource } from '../database'
import User from '../models/User'
import { hash } from 'bcryptjs'

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
      throw new Error('Email address already used')
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
