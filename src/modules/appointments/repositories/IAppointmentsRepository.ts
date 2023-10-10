import type Appointment from '../infra/typeorm/entities/Appointment'
import type ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO'

export default interface IAppointmentRepository {
  create: (data: ICreateAppointmentDTO) => Promise<Appointment>
}
