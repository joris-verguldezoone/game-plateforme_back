import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jeux } from "../../../jeux/model/entities/jeux.entity";

@Entity("type", { schema: "jeux" })
export class Type {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column("text", { name: "typedejeux" })
    public typedejeux: string;

    @Column("int", { name: "nbdejeux" })
    public nbdejeux: number;

    @Column("int", { name: "nbcartes" })
    public nbcartes: number;

    @Column("text", { name: "typedecarte" })
    public typedecarte: string;

    @OneToMany(() => Jeux, (jeux) => jeux.idtype2)
    public jeux: Jeux[];
}
