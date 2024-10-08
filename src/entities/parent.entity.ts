import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Child } from './child.entity';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Child, (child) => child.parent)
  children: Child[];
}
