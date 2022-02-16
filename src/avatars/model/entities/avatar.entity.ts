import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../../users/model/entities/user.entity';

@Index('iduser', ['iduser'], {})
@Entity('avatar', { schema: 'jeux' })
export class Avatar {
  @Column('int', { primary: true, name: 'id' })
  public id: number;

  @Column('text', { name: 'description' })
  public description: string;

  @Column('text', { name: 'image' })
  public image: string;

  @Column('int', { name: 'iduser' })
  public iduser: number;

  @ManyToOne(() => User, (user) => user.avatars, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'iduser', referencedColumnName: 'id' }])
  public iduser2: User;

  @OneToMany(() => User, (user) => user.idavatar2)
  public users: User[];
}
