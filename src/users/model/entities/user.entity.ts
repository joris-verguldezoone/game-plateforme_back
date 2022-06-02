import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Listeamis } from '../../../listeamis/model/entities/listeami.entity';
import { Partieuser } from '../../../partieusers/model/entities/partieuser.entity';
import { Score } from '../../../scores/model/entities/score.entity';
import { Avatar } from '../../../avatars/model/entities/avatar.entity';
import { Expose } from 'class-transformer';

@Index('id_avatar', ['idavatar'], {})
@Entity('user', { schema: 'jeux' })
export class User {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column('varchar', { name: 'username', length: 255 })
  public username: string;

  @Column('varchar', { name: 'password', length: 255 })
  public password: string;

  @Column('int', { name: 'idavatar', nullable: true })
  public idavatar: number | null;

  @Column('int', { name: 'role' })
  public role: number;

  @OneToMany(() => Avatar, (avatar) => avatar.iduser2)
  public avatars: Avatar[];

  @OneToMany(() => Listeamis, (listeamis) => listeamis.iduser3)
  public listeamis: Listeamis[];

  @OneToMany(() => Listeamis, (listeamis) => listeamis.iduser4)
  public listeamis2: Listeamis[];

  @OneToMany(() => Partieuser, (partieuser) => partieuser.iduser2)
  public partieusers: Partieuser[];

  @OneToMany(() => Score, (score) => score.iduser2)
  public scores: Score[];

  // @ManyToOne(() => Avatar, (avatar) => avatar.users, {
  //   onDelete: 'SET NULL',
  //   onUpdate: 'SET NULL',
  // })
  // @JoinColumn([{ name: 'idavatar', referencedColumnName: 'id' }])
  // public idavatar2: Avatar;

  @Expose()
  get Username(): string {
    return `${this.username}`;
  }
  @Expose()
  get getPassword(): string {
    return `${this.password}`;
  }
}
