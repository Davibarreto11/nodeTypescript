import { type Request, type Response } from 'express'

import CreateappointmentService from '../../../services/CreateAppointmentService'
import AppointmentsRepository from '../../typeorm/repositories/AppointmentsRepository'

const appointmentsRepository = new AppointmentsRepository()

class AppointmentController {
  public async create (request: Request, response: Response): Promise<Response> {
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
  }
}

export default new AppointmentController()
