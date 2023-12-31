import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { Exclude, Expose } from 'class-transformer'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    name: string

  @Column()
    email: string

  @Column()
  @Exclude()
    password: string

  @Column()
    avatar: string

  @CreateDateColumn()
    created_at: Date

  @UpdateDateColumn()
    updated_at: Date

  @Expose()
  get avatar_url (): string {
    return `http://192.168.1.12:3333/files/${this.avatar}`
  }
}

export default User
