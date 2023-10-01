import { Router } from 'express'
import { AppDataSource } from '../database'

import appointment from '../models/Appointment'
import CreateappointmentService from '../services/CreateAppointmentService'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

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
