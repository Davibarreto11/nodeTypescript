import { DataSource } from 'typeorm';

import CreateAppointments1695957180602 from './migrations/1695957180602-CreateAppointments';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gostack11',
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [CreateAppointments1695957180602],
});

export default AppDataSource;
