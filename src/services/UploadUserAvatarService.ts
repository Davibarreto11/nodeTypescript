import { AppDataSource } from '../database'
import path from 'path'
import fs from 'fs/promises'

import uploadConfig from '../config/upload'
import User from '../models/User'

import AppError from '../errors/AppError'

interface Request {
  user_id: string
  avatarFilename: string | undefined
}

class UploadUserAvatarService {
  public async execute ({ user_id, avatarFilename }: Request): Promise<User> {
    const usersRepository = AppDataSource.getRepository(User)

    const user = await usersRepository.findOneBy({ id: user_id })

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401)
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
      const usereAvatarFileExists = await fs.stat(userAvatarFilePath)

      if (usereAvatarFileExists) {
        await fs.unlink(userAvatarFilePath)
      }
    }

    if (avatarFilename) {
      user.avatar = avatarFilename

      await usersRepository.save(user)
    }

    return user
  }
}

export default UploadUserAvatarService
