import { Column, Entity, OneToMany } from "typeorm";
import { Partie } from "../../../parties/model/entities/party.entity";
import { Reglesjeux } from "../../../reglesjeux/model/entities/reglesjeux.entity";

@Entity("difficulte", { schema: "jeux" })
export class Difficulte {
    @Column("int", { primary: true, name: "id" })
    public id: number;

    @Column("text", { name: "difficulte" })
    public difficulte: string;

    @Column("int", { name: "multiplicateurscore" })
    public multiplicateurscore: number;

    @OneToMany(() => Partie, (partie) => partie.iddifficulte2)
    public partie: Partie[];

    @OneToMany(() => Reglesjeux, (reglesjeux) => reglesjeux.iddifficulte2)
    public reglesjeux: Reglesjeux[];
}
