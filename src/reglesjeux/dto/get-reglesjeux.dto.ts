import { ApiProperty } from '@nestjs/swagger';
import { CreateReglesjeuxDto } from './create-reglesjeux.dto';
import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';


export class GetReglesjeuxDto {
    @Type(() => Number)
    @ApiProperty()
    readonly id: number;
    @Type(() => Number)
    @ApiProperty()
    readonly idjeux: number;
    @ApiProperty()
    readonly nomregle: string;
    @ApiProperty()
    readonly regle: string;
    @Type(() => Number)
    @ApiProperty()
    readonly iddifficulte: number;
    @Type(() => Number)
    @ApiProperty()
    readonly nbjoueurmin: number;
    @Type(() => Number)
    @ApiProperty()
    readonly nbjoueurmax: number;
}
