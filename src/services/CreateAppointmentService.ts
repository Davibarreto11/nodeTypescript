import { AppDataSource } from '../database'

import Appointment from '../models/Appointment'

interface RequestBet {
  provider_id: string
  date: Date
}

class CreateBetService {
  public async execute ({ date, provider_id }: RequestBet): Promise<Appointment> {
    const appointmentsRepository = AppDataSource.getRepository(Appointment)

    const dateNow = new Date()

    const appointment = appointmentsRepository.create({
      date: dateNow,
      provider_id
    })

    await appointmentsRepository.save(appointment)

    return appointment
  }
}

export default CreateBetService
