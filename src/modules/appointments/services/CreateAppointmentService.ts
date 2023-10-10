import type Appointment from '../infra/typeorm/entities/Appointment'
import type IAppointmentRepository from '../repositories/IAppointmentsRepository'

interface IRequest {
  provider_id: string
  date: Date
}

class CreateBetService {
  constructor (private readonly appointmentsRepository: IAppointmentRepository) {}

  public async execute ({ date, provider_id }: IRequest): Promise<Appointment> {
    const dateNow = new Date()

    const appointment = await this.appointmentsRepository.create({
      date: dateNow,
      provider_id
    })

    return appointment
  }
}

export default CreateBetService
