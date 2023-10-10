import { Router } from 'express'
import { AppDataSource } from '../../../../../shared/infra/database'

import appointment from '../../typeorm/entities/Appointment'
import CreateappointmentService from '../../../services/CreateAppointmentService'

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated'

const appointmentsRouter = Router()

appointmentsRouter.use(ensureAuthenticated)

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = AppDataSource.getRepository(appointment)
  const appointments = await appointmentsRepository.find()

  return response.json(appointments)
})

appointmentsRouter.post('/', async (request, response) => {
  const {
    date,
    provider_id
  } = request.body

  const createappointment = new CreateappointmentService()

  const appointment = await createappointment.execute({
    date,
    provider_id
  })

  return response.json(appointment)
})

export default appointmentsRouter
