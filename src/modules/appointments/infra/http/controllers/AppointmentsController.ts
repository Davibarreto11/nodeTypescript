import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import CreateappointmentService from '../../../services/CreateAppointmentService'
// import { parseISO } from 'date-fns'

class AppointmentController {
  public async create (request: Request, response: Response): Promise<Response> {
    const {
      provider_id
    } = request.body

    const createappointment = container.resolve(CreateappointmentService)

    const appointment = await createappointment.execute({
      date: new Date(),
      provider_id
    })

    return response.json(appointment)
  }
}

export default new AppointmentController()
