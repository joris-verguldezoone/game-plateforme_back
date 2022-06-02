import { PartialType } from '@nestjs/swagger';
import { CreateDifficulteDto } from './create-difficulte.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetDifficulteDto {
    @Type(() => Number)
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly difficulte: string;

    @ApiProperty()
    @Type(() => Number)
    readonly multiplicateurscore: number;
}
