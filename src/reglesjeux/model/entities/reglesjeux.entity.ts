import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Jeux } from "../../../jeux/model/entities/jeux.entity";
import { Difficulte } from "../../../difficulte/model/entities/difficulte.entity";

@Index("idjeux", ["idjeux"], {})
@Index("iddifficulte", ["iddifficulte"], {})
@Entity("reglesjeux", { schema: "jeux" })
export class Reglesjeux {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column("int", { name: "idjeux" })
    public idjeux: number;

    @Column("text", { name: "nomregle" })
    public nomregle: string;

    @Column("text", { name: "regle" })
    public regle: string;

    @Column("int", { name: "iddifficulte" })
    public iddifficulte: number;

    @Column("int", { name: "nbjoueurmin" })
    public nbjoueurmin: number;

    @Column("int", { name: "nbjoueurmax" })
    public nbjoueurmax: number;

    @ManyToOne(() => Jeux, (jeux) => jeux.reglesjeux, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })

    @JoinColumn([{ name: "idjeux", referencedColumnName: "id" }])
    public idjeux2: Jeux;

    @ManyToOne(() => Difficulte, (difficulte) => difficulte.reglesjeux, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn([{ name: "iddifficulte", referencedColumnName: "id" }])
    public iddifficulte2: Difficulte;
}
