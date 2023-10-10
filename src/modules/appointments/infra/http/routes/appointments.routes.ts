import { Router } from 'express'

import CreateappointmentService from '../../../services/CreateAppointmentService'

import AppointmentsRepository from '../../typeorm/repositories/AppointmentsRepository'

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated'

const appointmentsRouter = Router()
const appointmentsRepository = new AppointmentsRepository()

appointmentsRouter.use(ensureAuthenticated)

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find()

//   return response.json(appointments)
// })

appointmentsRouter.post('/', async (request, response) => {
  const {
    date,
    provider_id
  } = request.body

  const createappointment = new CreateappointmentService(appointmentsRepository)

  const appointment = await createappointment.execute({
    date,
    provider_id
  })

  return response.json(appointment)
})

export default appointmentsRouter
