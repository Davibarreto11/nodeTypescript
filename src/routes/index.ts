import { Router } from 'express'

// import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import appointmentsRouter from './appointments.routes'
import usersRouter from './users.routes'

const routes = Router()

routes.use('/appointments', appointmentsRouter)
routes.use('/users', usersRouter)

export default routes
