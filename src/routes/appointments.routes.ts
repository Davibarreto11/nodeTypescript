import { Router } from 'express'
import { AppDataSource } from '../database'

import appointment from '../models/Appointment'
import CreateappointmentService from '../services/CreateAppointmentService'

const appointmentsRouter = Router()

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = AppDataSource.getRepository(appointment)
  const appointments = await appointmentsRepository.find()

  return response.json(appointments)
})

appointmentsRouter.post('/', async (request, response) => {
  try {
    const {
      date,
      provider
    } = request.body

    const createappointment = new CreateappointmentService()

    const appointment = await createappointment.execute({
      date,
      provider
    })

    return response.json(appointment)
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message })
  }
})

export default appointmentsRouter
