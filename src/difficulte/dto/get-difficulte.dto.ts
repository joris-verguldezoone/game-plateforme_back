import { PartialType } from '@nestjs/swagger';
import { CreateDifficulteDto } from './create-difficulte.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetDifficulteDto {
    @Type(() => Number)
    @ApiProperty({ required: false })
    readonly id: number;

    @ApiProperty({ required: false })
    readonly difficulte: string;

    @ApiProperty({ required: false })
    @Type(() => Number)
    readonly multiplicateurscore: number;
}
