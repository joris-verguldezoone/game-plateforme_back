import { ApiProperty } from '@nestjs/swagger';
import { CreateReglesjeuxDto } from './create-reglesjeux.dto';
import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';


export class GetReglesjeuxDto {
    @Type(() => Number)
    @ApiProperty({ required: false })
    readonly id: number;

    @Type(() => Number)
    @ApiProperty({ required: false })
    readonly idjeux: number;

    @ApiProperty({ required: false })
    readonly nomregle: string;

    @ApiProperty({ required: false })
    readonly regle: string;

    @Type(() => Number)
    @ApiProperty({ required: false })
    readonly iddifficulte: number;

    @Type(() => Number)
    @ApiProperty({ required: false })
    readonly nbjoueurmin: number;

    @Type(() => Number)
    @ApiProperty({ required: false })
    readonly nbjoueurmax: number;

}
