import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePartyDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  nbjoueurs: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  iddifficulte: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  idjeux: number;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  createdat: Date;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  finishedat: Date;
}
