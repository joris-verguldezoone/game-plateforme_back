import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetReglesjeuxDto } from './get-reglesjeux.dto';

export class CreateReglesjeuxDto extends PartialType(GetReglesjeuxDto) {

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
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
  @Type(() => Number)
  @ApiProperty()
  iddifficulte: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  nbjoueurmin: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  nbjoueurmax: number;
}
