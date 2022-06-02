import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../../users/model/entities/user.entity";
import { Partie } from "../../../parties/model/entities/party.entity";

@Index("iduser", ["iduser"], {})
@Index("idpartie", ["idpartie"], {})
@Entity("partieuser", { schema: "jeux" })
export class Partieuser {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column("int", { name: "iduser" })
    public iduser: number;

    @Column("int", { name: "idpartie" })
    public idpartie: number;

    @Column("int", { name: "statut" })
    public statut: number;

    @ManyToOne(() => User, (user) => user.partieusers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn([{ name: "iduser", referencedColumnName: "id" }])
    public iduser2: User;

    @ManyToOne(() => Partie, (partie) => partie.partieuser, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    @JoinColumn([{ name: "idpartie", referencedColumnName: "id" }])
    public idpartie2: Partie;
}
