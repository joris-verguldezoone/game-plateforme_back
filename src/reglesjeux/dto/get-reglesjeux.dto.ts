import { ApiProperty } from '@nestjs/swagger';
import { CreateReglesjeuxDto } from './create-reglesjeux.dto';
import { PartialType } from '@nestjs/swagger';


export class GetReglesjeuxDto extends PartialType(CreateReglesjeuxDto) {
    @ApiProperty()
    readonly id: number;
    @ApiProperty()
    readonly idjeux: number;
    @ApiProperty()
    readonly nomregle: string;
    @ApiProperty()
    readonly regle: string;
    @ApiProperty()
    readonly iddifficulte: number;
    @ApiProperty()
    readonly nbjoueurmin: number;
    @ApiProperty()
    readonly nbjoueurmax: number;
}
