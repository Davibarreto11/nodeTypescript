import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import { classToPlain } from 'class-transformer'

import UpdateProfileService from '../../../services/UpdateProfileService'
import ShowProfileService from '../../../services/ShowProfileService'

export default class ProfileController {
  public async show (request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id

    const showProfileService = container.resolve(ShowProfileService)

    const user = await showProfileService.execute({
      user_id
    })

    return response.json(classToPlain(user))
  }

  public async update (request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id
    const { name, email, old_password, password } = request.body

    const updateProfile = container.resolve(UpdateProfileService)

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password
    })

    return response.json(classToPlain(user))
  }
}
