import { Router } from 'express'

import ProfileController from '../controllers/ProfileController'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const profileRouter = Router()
const profileController = new ProfileController()

profileRouter.use(ensureAuthenticated)

profileRouter.post('/', profileController.update)
profileRouter.patch('/:id', profileController.show)

export default profileRouter
