import type Appointment from '../infra/typeorm/entities/Appointment'

import type ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO'
import type IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO'
import type IFindAllInDayFromProvider from '../dtos/IFindAllInDayFromProviderDTO'

export default interface IAppointmentRepository {
  create: (data: ICreateAppointmentDTO) => Promise<Appointment>
  findByDate: (date: Date) => Promise<Appointment | null>
  findAllInMonthFromProvider: (data: IFindAllInMonthFromProviderDTO) => Promise<Appointment[]>
  findAllInDayFromProvider: (data: IFindAllInDayFromProvider) => Promise<Appointment[]>
}
