import type IMailProvider from '../models/IMailProvider'

interface IMessage {
  to: string
  body: string
}

class FakeMailProvider implements IMailProvider {
  private readonly message: IMessage[] = []

  public async sendMail (to: string, body: string): Promise<void> {
    this.message.push({
      to,
      body
    })
  }
}

export default FakeMailProvider
