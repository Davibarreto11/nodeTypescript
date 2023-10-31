import { injectable, inject } from 'tsyringe'

import AppError from '../../../shared/errors/AppError'

import IUsersRepository from '../repositories/IUsersRepository'
import IMailProvider from '../providers/MailProvider/models/IMailProvider'
import IUserTokenRepository from '../repositories/IUserTokenRepository'

interface IRequest {
  email: string
}

@injectable()
class SendForgotPasswordEmailService {
  constructor (
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,

    @inject('MailProvider')
    private readonly mailProvider: IMailProvider,

    @inject('UserTokenRepository')
    private readonly usrsTokenRepository: IUserTokenRepository
  ) {}

  public async execute ({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('User does not exists.')
    }

    await this.usrsTokenRepository.generated(user.id)

    this.mailProvider.sendMail(email, 'Pedido de recuperação de senha recebido')
  }
}

export default SendForgotPasswordEmailService
