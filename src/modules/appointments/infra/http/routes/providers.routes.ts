import { Router } from 'express'

import ensureAuthenticated from '../../../../../modules/users/infra/http/middlewares/ensureAuthenticated'

import ProvidersController from '../controllers/ProvidersController'
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController'
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController'

const providersRouter = Router()

const providersController = new ProvidersController()
const providersMonthAvalabilityController = new ProviderMonthAvailabilityController()
const providersDayAvalabilityController = new ProviderDayAvailabilityController()

providersRouter.use(ensureAuthenticated)

providersRouter.get('/list', providersController.index)
providersRouter.get('/:provider_id/month-availability', providersMonthAvalabilityController.index)
providersRouter.get('/:provider_id/day-availability', providersDayAvalabilityController.index)

export default providersRouter
