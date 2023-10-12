// import AppError from '../../../shared/errors/AppError'

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import CreateUsersService from './CreateUsersServiece'

describe('CreateUserService', () => {
  test('Should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const createUser = new CreateUsersService(fakeUsersRepository)

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'email@mail.com',
      password: '123456'
    })

    expect(user).toHaveProperty('id')
  })

  // test('Should not be able to create new user with same email from another', async () => {
  //   const fakeUsersRepository = new FakeUsersRepository()
  //   const createUser = new CreateUsersService(fakeUsersRepository)

  //   await createUser.execute({
  //     name: 'John Doe',
  //     email: 'email@mail.com',
  //     password: '123456'
  //   })

  //   expect(
  //     await createUser.execute({
  //       name: 'Kennedy Duhn',
  //       email: 'email@mail.com',
  //       password: '987654'
  //     })
  //   ).rejects.toBeInstanceOf(AppError)
  // })
})
