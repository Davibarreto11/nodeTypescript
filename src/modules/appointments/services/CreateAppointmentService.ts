import { injectable, inject } from 'tsyringe'
import { startOfHour, isBefore, getHours } from 'date-fns'

import AppError from '../../../shared/errors/AppError'

import type Appointment from '../infra/typeorm/entities/Appointment'
import IAppointmentRepository from '../repositories/IAppointmentsRepository'

interface IRequest {
  provider_id: string
  user_id: string
  date: Date
}

@injectable()
class CreateBetService {
  constructor (
    @inject('AppointmentsRepository')
    private readonly appointmentsRepository: IAppointmentRepository
  ) {}

  public async execute ({ date, provider_id, user_id }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date)

    if (isBefore(appointmentDate, Date.now())) {
      throw new AppError("You can't create an appointment on past date.")
    }

    if (user_id === provider_id) {
      throw new AppError("You can't create an appointment with yourself.")
    }

    if (getHours(appointmentDate) < 8 || getHours(appointmentDate) > 18) {
      throw new AppError('You can only create appointements between 8am and 18pm.')
    }

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate
    )

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked')
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      user_id,
      date: appointmentDate
    })

    return appointment
  }
}

export default CreateBetService
