import { AppDataSource } from '../../../../../shared/infra/database'
import { type Repository } from 'typeorm'

import type IAppointmentsRepository from '../../../repositories/IAppointmentsRepository'
import type ICreateAppointmentDTO from '../../../dtos/ICreateAppointmentDTO'

import Appointment from '../entities/Appointment'

class AppointmentsRepository implements IAppointmentsRepository {
  private readonly ormRepository: Repository<Appointment>

  constructor () {
    this.ormRepository = AppDataSource.getRepository(Appointment)
  }

  public async create ({ date, provider_id }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({ date, provider_id })

    await this.ormRepository.save(appointment)

    return appointment
  }
}

export default AppointmentsRepository
