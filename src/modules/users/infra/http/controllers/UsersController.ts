import { type Request, type Response } from 'express'

import UsersRepository from '../../typeorm/repositories/UsersRepository'
import CreateUserService from '../../../services/CreateUsersServiece'

const usersRepository = new UsersRepository()

class UsersController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const createUser = new CreateUserService(usersRepository)

    const user = await createUser.execute({
      name,
      email,
      password
    })

    return response.json(user)
  }
}

export default new UsersController()
