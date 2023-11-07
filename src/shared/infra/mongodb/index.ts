import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'gobarber',
  useUnifiedTopology: true,
  entities: []
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source mongodb has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
