import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import ListProviderMonthAvailabilityService from '../../../../../modules/appointments/services/ListProviderMonthAvailabilityService'

export default class ProviderMonthAvailabilityController {
  public async index (request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params
    const { month, year } = request.query

    const listProviderMothAvailabilityService = container.resolve(
      ListProviderMonthAvailabilityService
    )

    const availability = await listProviderMothAvailabilityService.execute({
      provider_id,
      month: Number(month),
      year: Number(year)
    })

    return response.json(availability)
  }
}
