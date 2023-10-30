import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import FakeMailProvider from '../providers/MailProvider/fakes/FakeMailProvider'
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService'

describe('SendForgotPasswordEmail', () => {
  test('Should be able to recover the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeMailProvider = new FakeMailProvider()

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail')

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider
    )

    await fakeUsersRepository.create({
      name: 'Davi Artur',
      email: 'davi@gmail.com',
      password: '123456'
    })

    await sendForgotPasswordEmail.execute({
      email: 'davi@gmail.com'
    })

    expect(sendMail).toHaveBeenCalled()
  })
})
