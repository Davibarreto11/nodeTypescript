import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import CreateUserService from '../../../services/CreateUsersServiece'

class UsersController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const createUser = container.resolve(CreateUserService)

    const user = await createUser.execute({
      name,
      email,
      password
    })

    return response.json(user)
  }
}

export default new UsersController()
