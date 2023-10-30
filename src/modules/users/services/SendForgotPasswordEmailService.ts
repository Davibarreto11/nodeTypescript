import { injectable, inject } from 'tsyringe'

import IUsersRepository from '../repositories/IUsersRepository'
import IMailProvider from '../providers/MailProvider/models/IMailProvider'

interface IRequest {
  email: string
}

@injectable()
class SendForgotPasswordEmailService {
  constructor (
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,

    @inject('MailProvider')
    private readonly mailProvider: IMailProvider
  ) {}

  public async execute ({ email }: IRequest): Promise<void> {
    this.mailProvider.sendMail(email, 'Pedido de recuperação de senha recebido')
  }
}

export default SendForgotPasswordEmailService
