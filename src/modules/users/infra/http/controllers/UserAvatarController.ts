import { type Request, type Response } from 'express'

import UsersRepository from '../../typeorm/repositories/UsersRepository'
import UploadUserAvatarService from '../../../services/UploadUserAvatarService'

const usersRepository = new UsersRepository()

class UserAvatarController {
  public async update (request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = new UploadUserAvatarService(usersRepository)

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file?.filename
    })

    return response.json(user)
  }
}

export default new UserAvatarController()
