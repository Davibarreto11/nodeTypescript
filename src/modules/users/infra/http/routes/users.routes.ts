import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../../../../../config/upload'

import UsersRepository from '../../typeorm/repositories/UserRepository'
import CreateUserService from '../../../services/CreateUserServiece'
import UploadUserAvatarService from '../../../services/UploadUserAvatarService'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const usersRouter = Router()
const upload = multer(uploadConfig)

const usersRepository = new UsersRepository()

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body

  const createUser = new CreateUserService(usersRepository)

  const user = await createUser.execute({
    name,
    email,
    password
  })

  return response.json(user)
})

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UploadUserAvatarService(usersRepository)

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file?.filename
    })

    return response.json(user)
  })

export default usersRouter
