import { container } from 'tsyringe'

import type IHashProvider from './HashProvider/models/IHashProvider'
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider'

// import IMailProvider from './MailProvider/models/IMailProvider'

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider)
