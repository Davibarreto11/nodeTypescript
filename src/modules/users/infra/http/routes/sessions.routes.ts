import { Router } from 'express'

import UsersRepository from '../../typeorm/repositories/UsersRepository'
import AuthenticateUserService from '../../../services/AuthenticateUserService'

const sessionsRouter = Router()
const userRepository = new UsersRepository()

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body

  const authenticateUser = new AuthenticateUserService(userRepository)

  const { user, token } = await authenticateUser.execute({
    email,
    password
  })

  return response.json({ user, token })
})

export default sessionsRouter
