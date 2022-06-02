import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Type } from '../../../types/model/entities/type.entity';
import { Partie } from '../../../parties/model/entities/party.entity';
import { Reglesjeux } from '../../../reglesjeux/model/entities/reglesjeux.entity';

@Index('idtype', ['idtype'], {})
@Entity('jeux', { schema: 'jeux' })
export class Jeux {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column('text', { name: 'nom' })
  public nom: string;

  @Column('int', { name: 'idtype' })
  public idtype: number;

  @ManyToOne(() => Type, (type) => type.jeux, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'idtype', referencedColumnName: 'id' }])
  public idtype2: Type;

  @OneToMany(() => Partie, (partie) => partie.idjeux2)
  public partie: Partie[];

  @OneToMany(() => Reglesjeux, (reglesjeux) => reglesjeux.idjeux2)
  public reglesjeux: Reglesjeux[];
}

