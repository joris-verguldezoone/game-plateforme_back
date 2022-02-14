import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Listeamis } from '../../../listeamis/model/entities/listeami.entity';
import { Partieuser } from '../../../partieusers/model/entities/partieuser.entity';
import { Score } from '../../../scores/model/entities/score.entity';
import { Expose } from 'class-transformer';

@Entity({ schema: 'jeux' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  public id: number;

  @Column('varchar', { name: 'username', length: 255 })
  public username: string;

  @Column('varchar', { name: 'password', length: 255 })
  public password: string;

  @Column('int', { name: 'id_avatar', nullable: true })
  public id_avatar: number | null;

  @Column('int', { name: 'role' })
  public role: number;

  @OneToMany(() => Listeamis, (listeamis) => listeamis.iduser3)
  public listeamis: Listeamis[];

  @OneToMany(() => Listeamis, (listeamis) => listeamis.iduser4)
  public listeamis2: Listeamis[];

  @OneToMany(() => Partieuser, (partieuser) => partieuser.iduser2)
  public partieuser: Partieuser[];

  @OneToMany(() => Score, (score) => score.iduser2)
  public score: Score[];

  @Expose()
  get Username(): string {
    return `${this.username}`;
  }
  @Expose()
  get getPassword(): string {
    return `${this.password}`;
  }
}
