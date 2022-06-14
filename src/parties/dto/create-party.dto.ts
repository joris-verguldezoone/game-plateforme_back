import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetPartyDto } from './get-party.dto';

export class CreatePartyDto extends PartialType(GetPartyDto) {

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Number)
  nbjoueurs: number;

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Number)
  iddifficulte: number;

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Number)
  idjeux: number;

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Number)
  idregle: number;

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Date)
  createdat: Date;

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Date)
  finishedat: Date;
}
