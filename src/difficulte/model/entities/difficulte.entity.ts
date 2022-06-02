import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Partie } from '../../../parties/model/entities/party.entity';
import { Reglesjeux } from '../../../reglesjeux/model/entities/reglesjeux.entity';


@Entity('difficulte', { schema: 'jeux' })
export class Difficulte {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column('text', { name: 'difficulte' })
  public difficulte: string;

  @Column('int', { name: 'multiplicateurscore' })
  public multiplicateurscore: number;

  @OneToMany(() => Partie, (partie) => partie.iddifficulte2)
  public partie: Partie[];

  @OneToMany(() => Reglesjeux, (reglesjeux) => reglesjeux.iddifficulte2)
  public reglesjeux: Reglesjeux[];
}
