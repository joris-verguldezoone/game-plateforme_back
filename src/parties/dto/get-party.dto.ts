
import { PartialType } from '@nestjs/swagger';
import { CreatePartyDto } from './create-party.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';



export class GetPartyDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Type(() => Number)
    id: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Type(() => Number)
    nbjoueurs: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Type(() => Number)
    iddifficulte: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    @Type(() => Number)
    idjeux: number;

    @IsNotEmpty()
    @IsDate()
    @ApiProperty()
    @Type(() => Date)
    createdat: Date;

    @IsNotEmpty()
    @IsDate()
    @ApiProperty()
    @Type(() => Date)
    finishedat: Date;
}
