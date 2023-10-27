import { v4 as uuidv4 } from 'uuid'
import { isEqual } from 'date-fns'

import type IAppointmentsRepository from '../IAppointmentsRepository'
import type ICreateAppointmentDTO from '../../dtos/ICreateAppointmentDTO'

import Appointment from '../../infra/typeorm/entities/Appointment'

class AppointmentsRepository implements IAppointmentsRepository {
  private readonly appointments: Appointment[] = []

  public async findByDate (date: Date): Promise<Appointment | null> {
    const findAppointement = this.appointments.find(
      appointment => isEqual(appointment.date, date)
    )

    if (!findAppointement) {
      return null
    }

    return findAppointement
  }

  public async create ({ date, provider_id }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment()

    Object.assign(appointment, { id: uuidv4(), date, provider_id })

    this.appointments.push(appointment)

    return appointment
  }
}

export default AppointmentsRepository
