import AppError from '../../../shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import CreateUsersService from './CreateUsersServiece'

describe('CreateUserService', () => {
  test('Should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHashProvider()

    const createUser = new CreateUsersService(fakeUsersRepository, fakeHashProvider)

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'email@mail.com',
      password: '123456'
    })

    expect(user).toHaveProperty('id')
  })

  test('Should not be able to create new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHashProvider()

    const createUser = new CreateUsersService(fakeUsersRepository, fakeHashProvider)

    await createUser.execute({
      name: 'John Doe',
      email: 'email@mail.com',
      password: '123456'
    })

    expect(
      createUser.execute({
        name: 'John Doe',
        email: 'email@mail.com',
        password: '123456'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
