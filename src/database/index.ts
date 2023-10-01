import { DataSource } from 'typeorm'

import CreateAppointments1695957180602 from './migrations/1696009232692-CreateAppointments'
import { CreateUsers1696019680697 } from './migrations/1695019680691-CreateUsers'
import { AddAvatarFieldToUsers1696039971100 } from './migrations/1696039971100-AddAvatarFieldToUsers'

import Appointment from '../models/Appointment'
import User from '../models/User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gostack11',
  synchronize: false,
  logging: false,
  entities: [Appointment, User],
  migrations: [
    CreateUsers1696019680697,
    CreateAppointments1695957180602,
    AddAvatarFieldToUsers1696039971100
  ]
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
