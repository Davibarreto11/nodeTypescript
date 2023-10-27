import { container } from 'tsyringe'

import type IHashProvider from './models/IHashProvider'
import BCryptHashProvider from './implementations/BCryptHashProvider'

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider)
