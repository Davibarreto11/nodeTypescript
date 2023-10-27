import { startOfHour } from 'date-fns'
import { injectable, inject } from 'tsyringe'

import AppError from '../../../shared/errors/AppError'

import type Appointment from '../infra/typeorm/entities/Appointment'
import IAppointmentRepository from '../repositories/IAppointmentsRepository'

interface IRequest {
  provider_id: string
  date: Date
}

@injectable()
class CreateBetService {
  constructor (
    @inject('AppointmentsRepository')
    private readonly appointmentsRepository: IAppointmentRepository
  ) {}

  public async execute ({ date, provider_id }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(new Date())

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate
    )

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked')
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate
    })

    return appointment
  }
}

export default CreateBetService
