
import { PartialType } from '@nestjs/swagger';
import { CreatePartyDto } from './create-party.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';



export class GetPartyDto {
    @ApiProperty({ required: false })
    @Type(() => Number)
    id: number;

    @ApiProperty({ required: false })
    @Type(() => Number)
    nbjoueurs: number;

    @ApiProperty({ required: false })
    @Type(() => Number)
    iddifficulte: number;

    @ApiProperty({ required: false })
    @Type(() => Number)
    idjeux: number;

    @IsNotEmpty()
    @ApiProperty()
    @Type(() => Number)
    idregle: number;

    @ApiProperty({ required: false })
    @Type(() => Date)
    createdat: Date;

    @ApiProperty({ required: false })
    @Type(() => Date)
    finishedat: Date;
}
