import {
  Column,
  Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Difficulte } from "../../../difficulte/model/entities/difficulte.entity";
import { Jeux } from "../../../jeux/model/entities/jeux.entity";
import { Partieuser } from "../../../partieusers/model/entities/partieuser.entity";
import { Score } from "../../../scores/model/entities/score.entity";

@Index("iddifficulte", ["iddifficulte"], {})
@Index("idjeux", ["idjeux"], {})
@Entity("partie", { schema: "jeux" })
export class Partie {
    @Column("int", { primary: true, name: "id" })
    public id: number;

    @Column("int", { name: "nbjoueurs" })
    public nbjoueurs: number;

    @Column("int", { name: "iddifficulte" })
    public iddifficulte: number;

    @Column("int", { name: "idjeux" })
    public idjeux: number;

    @Column("datetime", { name: "createdat", default: () => "CURRENT_TIMESTAMP" })
    public createdat: Date;

    @Column("datetime", { name: "finishedat", nullable: true })
    public finishedat: Date | null;

    @ManyToOne(() => Difficulte, (difficulte) => difficulte.partie, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn([{ name: "iddifficulte", referencedColumnName: "id" }])
    public iddifficulte2: Difficulte;

    @ManyToOne(() => Jeux, (jeux) => jeux.partie, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn([{ name: "idjeux", referencedColumnName: "id" }])
    public idjeux2: Jeux;

    @OneToMany(() => Partieuser, (partieuser) => partieuser.idpartie2)
    public partieuser: Partieuser[];

    @OneToMany(() => Score, (score) => score.idpartie2)
    public score: Score[];
}

