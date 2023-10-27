import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import UploadUserAvatarService from '../../../services/UploadUserAvatarService'

class UserAvatarController {
  public async update (request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UploadUserAvatarService)

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file?.filename
    })

    return response.json(user)
  }
}

export default new UserAvatarController()
