import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReglesjeuxDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  idjeux: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nomregle: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  regle: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  iddifficulte: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  nbjoueurmin: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  nbjoueurmax: number;
}
