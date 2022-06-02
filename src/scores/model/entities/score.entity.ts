import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../../../users/model/entities/user.entity";
import { Partie } from "../../../parties/model/entities/party.entity";

@Index("iduser", ["iduser"], {})
@Index("idpartie", ["idpartie"], {})
@Entity("score", { schema: "jeux" })
export class Score {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column("int", { name: "score" })
    public score: number;

    @Column("int", { name: "iduser" })
    public iduser: number;

    @Column("int", { name: "idpartie" })
    public idpartie: number;

    @ManyToOne(() => User, (user) => user.scores, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn([{ name: "iduser", referencedColumnName: "id" }])
    public iduser2: User;

    @ManyToOne(() => Partie, (partie) => partie.score, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn([{ name: "idpartie", referencedColumnName: "id" }])
    public idpartie2: Partie;
}
