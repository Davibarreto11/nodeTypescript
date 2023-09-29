import { DataSource } from 'typeorm'

import CreateAppointments1695957180602 from './migrations/1696009232692-CreateAppointments'

import Appointment from '../models/Appointment'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gostack11',
  synchronize: true,
  logging: false,
  entities: [Appointment],
  migrations: [
    CreateAppointments1695957180602
  ]
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
