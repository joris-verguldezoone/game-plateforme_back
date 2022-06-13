import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Type } from '../../../types/model/entities/type.entity';
import { Jeux } from '../../../jeux/model/entities/jeux.entity';
import { Reglesjeux } from '../../../reglesjeux/model/entities/reglesjeux.entity';
import { Difficulte } from "src/difficulte/model/entities/difficulte.entity";
import { User } from "src/users/model/entities/user.entity";
// import { Lobby } from '../../../lobby/model/entities/lobby.entity';

@Index("idRegle", ["idRegle"], {})
@Index("idJeux", ["idJeux"], {})
@Index("idDifficulte", ["idDifficulte"], {})
@Entity("lobby", { schema: "jeux" })
export class Lobby {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column('int', { name: 'nbMin' })
  public nbMin: number;

  @Column('int', { name: 'nbMax' })
  public nbMax: number;

  @Column('int', { name: 'idJeux' })
  public idJeux: number;

  @Column('int', { name: 'idRegle' })
  public idRegle: number;

  @Column('int', { name: 'idDifficulte' })
  public idDifficulte: number;

  @Column('int', { name: 'idUser' })
  public idUser: number;

  @Column('text', { name: 'nomLobby' })
  public nomLobby: string;

  @ManyToOne(() => Jeux, (jeux) => jeux.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: "idJeux", referencedColumnName: "id" }])
  public idjeux: Jeux;

  @ManyToOne(() => Reglesjeux, (reglesjeux) => reglesjeux.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idRegle", referencedColumnName: "id" }])
  public idregle: Reglesjeux;

  @ManyToOne(() => Difficulte, (difficulte) => difficulte.reglesjeux, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idDifficulte", referencedColumnName: "id" }])
  public iddifficulte: Difficulte;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "idUser", referencedColumnName: "id" }])
  public iduser: User;


  // @OneToMany(() => Reglesjeux, (reglesjeux) => reglesjeux.idjeux2)
  // public reglesjeux: Reglesjeux[];
}

