
import { PartialType } from '@nestjs/swagger';
import { CreatePartyDto } from './create-party.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';



export class GetPartyDto {
    @IsNumber()
    @ApiProperty({ required: false })
    @Type(() => Number)
    id: number;

    @IsNumber()
    @ApiProperty({ required: false })
    @Type(() => Number)
    nbjoueurs: number;

    @IsNumber()
    @ApiProperty({ required: false })
    @Type(() => Number)
    iddifficulte: number;

    @IsNumber()
    @ApiProperty({ required: false })
    @Type(() => Number)
    idjeux: number;

    @IsDate()
    @ApiProperty({ required: false })
    @Type(() => Date)
    createdat: Date;

    @IsDate()
    @ApiProperty({ required: false })
    @Type(() => Date)
    finishedat: Date;
}
