import { type Request, type Response } from 'express'

import AuthenticateUserService from '../../../services/AuthenticateUserService'
import UsersRepository from '../../typeorm/repositories/UsersRepository'

const userRepository = new UsersRepository()

class SessionController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const authenticateUser = new AuthenticateUserService(userRepository)

    const { user, token } = await authenticateUser.execute({
      email,
      password
    })

    return response.json({ user, token })
  }
}

export default new SessionController()
