// import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
// import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
// import AuthenticateUserService from './AuthenticateUserService'
// import CreateUserService from './CreateUsersServiece'

// describe('AuthenticateUserService', () => {
//   test('Should be able to authenticate', async () => {
//     const fakeUsersRepository = new FakeUsersRepository()
//     const fakeHashProvider = new FakeHashProvider()

//     const createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider)
//     const autheticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHashProvider)

//     const user = await createUser.execute({
//       name: 'Davi Artur',
//       email: 'davi@gmail.com',
//       password: '123456'
//     })

//     const response = await autheticateUser.execute({
//       email: 'davi@gmail.com',
//       password: '123456'
//     })

//     expect(response).toHaveProperty('token')
//     expect(response.user).toEqual(user)
//   })
// })
