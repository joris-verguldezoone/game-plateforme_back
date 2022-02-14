import {ApiProperty} from "@nestjs/swagger";

export class CreateTypeDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    type_de_jeux?: string;

    @ApiProperty()
    nb_de_jeux: number;

    @ApiProperty()
    nb_cartes:number;

    @ApiProperty()
    type_de_carte:string;
}
