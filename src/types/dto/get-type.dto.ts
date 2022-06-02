import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetTypeDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  typedejeux: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  nbdejeux: number;

  @Type(() => Number)
  @ApiProperty()
  nbcartes: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  typedecarte: string;
}
