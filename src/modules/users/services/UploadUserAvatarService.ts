import path from 'path'
import fs from 'fs/promises'

import uploadConfig from '../../../config/upload'
import type User from '../infra/typeorm/entities/User'

import AppError from '../../../shared/errors/AppError'
import type IUsersRepository from '../repositories/IUsersRepository'

interface IRequest {
  user_id: string
  avatarFilename: string | undefined
}

class UploadUserAvatarService {
  constructor (private readonly usersRepository: IUsersRepository) {}

  public async execute ({ user_id, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id)

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

      await this.usersRepository.save(user)
    }

    return user
  }
}

export default UploadUserAvatarService
