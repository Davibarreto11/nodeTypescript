import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository'
import CreateAppointmentService from './CreateAppointmentService'

describe('CreateAppointment', () => {
  test('Should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository()
    const createAppointment = new CreateAppointmentService(fakeAppointmentsRepository)

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: 'provider_id'
    })

    expect(appointment).toHaveProperty('id')
    expect(appointment.provider_id).toBe('provider_id')
  })

  // test('Should not be able to create two appointments on the same time', () => {

  // })
})
