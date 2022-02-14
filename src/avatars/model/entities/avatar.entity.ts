import { Column, Entity } from "typeorm";

@Entity("avatar", { schema: "jeux" })
export class Avatar {
    @Column("int", { primary: true, name: "id" })
    public id: number;

    @Column("text", { name: "description" })
    public description: string;

    @Column("text", { name: "image" })
    public image: string;
}
