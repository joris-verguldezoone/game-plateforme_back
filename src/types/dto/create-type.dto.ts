import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTypeDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  typedejeux: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  nbdejeux: number;

  @ApiProperty()
  nbcartes: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  typedecarte: string;
}
