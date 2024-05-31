import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() //自增
  id: number;

  @Column()
  name: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  entryDate: Date;

  @Generated('uuid')
  uuid: string;
}
