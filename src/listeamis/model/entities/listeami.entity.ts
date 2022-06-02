import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../../users/model/entities/user.entity';

@Index('iduser', ['iduser'], {})
@Index('iduser2', ['iduser2'], {})
@Entity('listeamis', { schema: 'jeux' })
export class Listeamis {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column('int', { name: 'iduser' })
  public iduser: number;

  @Column('int', { name: 'iduser2' })
  public iduser2: number;

  @Column('int', { name: 'statut' })
  public statut: number;

  @ManyToOne(() => User, (user) => user.listeamis, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'iduser', referencedColumnName: 'id' }])
  public iduser3: User;

  @ManyToOne(() => User, (user) => user.listeamis2, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'iduser2', referencedColumnName: 'id' }])
  public iduser4: User;
}
