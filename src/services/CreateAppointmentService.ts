import { AppDataSource } from '../database'

import Appointment from '../models/Appointment'

interface RequestBet {
  provider: string
  date: Date
}

class CreateBetService {
  public async execute ({ date, provider }: RequestBet): Promise<Appointment> {
    const betsRepository = AppDataSource.getRepository(Appointment)

    const dateNow = new Date()

    const appointment = betsRepository.create({
      date: dateNow,
      provider
    })

    await betsRepository.save(appointment)

    return appointment
  }
}

export default CreateBetService
