import { AppDataSource } from '../../../shared/infra/database'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import authConfig from '../../../config/auth'

import AppError from '../../../shared/errors/AppError'

import User from '../infra/typeorm/entities/User'

interface Request {
  email: string
  password: string
}

interface Response {
  user: User
  token: string
}

class AuthenticateUserService {
  public async execute ({ email, password }: Request): Promise<Response> {
    const usersRepository = AppDataSource.getRepository(User)

    const user = await usersRepository.findOne({
      where: { email }
    })

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401)
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiredIn
    })

    return {
      user,
      token
    }
  }
}

export default AuthenticateUserService