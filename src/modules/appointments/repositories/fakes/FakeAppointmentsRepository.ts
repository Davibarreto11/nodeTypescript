import { v4 as uuidv4 } from 'uuid'

import type IAppointmentsRepository from '../IAppointmentsRepository'
import type ICreateAppointmentDTO from '../../dtos/ICreateAppointmentDTO'

import Appointment from '../../infra/typeorm/entities/Appointment'

class AppointmentsRepository implements IAppointmentsRepository {
  private readonly appointments: Appointment[] = []

  public async create ({ date, provider_id }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment()

    Object.assign(appointment, { id: uuidv4(), date, provider_id })

    this.appointments.push(appointment)

    return appointment
  }
}

export default AppointmentsRepository
