import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import AuthenticateUserService from './AuthenticateUserService'
import CreateUserService from './CreateUsersServiece'

describe('AuthenticateUserService', () => {
  test('Should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository()

    const createUser = new CreateUserService(fakeUsersRepository)
    const autheticateUser = new AuthenticateUserService(fakeUsersRepository)

    await createUser.execute({
      name: 'Davi Artur',
      email: 'davi@gmail.com',
      password: '123456'
    })

    const response = await autheticateUser.execute({
      email: 'davi@gmail.com',
      password: '123456'
    })

    expect(response).toHaveBeenCalledWith(['user', 'token'])
  })
})
