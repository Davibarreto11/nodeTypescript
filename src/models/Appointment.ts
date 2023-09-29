import {
  Entity,
  Column,
  PrimaryGeneratedColumn

} from 'typeorm'

/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    provider: string

  @Column()
    date: Date
}

export default Appointment
