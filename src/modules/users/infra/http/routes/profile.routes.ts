import { Router } from 'express'

import ProfileController from '../controllers/ProfileController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const profileRouter = Router()
const profileController = new ProfileController()

profileRouter.use(ensureAuthenticated)

profileRouter.put('/update', profileController.update)
profileRouter.patch('/list', profileController.show)

export default profileRouter
