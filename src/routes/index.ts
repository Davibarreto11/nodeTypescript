import { Router } from 'express'

// import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import appointmentsRouter from './appointments.routes'

const routes = Router()

routes.use('/appointments', appointmentsRouter)

export default routes
