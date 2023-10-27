import { container } from 'tsyringe'

import type IStorageProvider from './models/IStorageProvider'
import DiskStorageProvider from './implementations/DiskStorageProvider'

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider
)
