import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
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

  @CreateDateColumn()
    created_at: Date

  @UpdateDateColumn()
    updated_at: Date
}

export default Appointment
