import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetPartyDto } from './get-party.dto';

export class CreatePartyDto extends PartialType(GetPartyDto) {

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
