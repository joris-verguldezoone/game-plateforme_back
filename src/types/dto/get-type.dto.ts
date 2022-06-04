import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetTypeDto {
  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ required: false }) id: number;

  @IsString()
  @ApiProperty({ required: false }) typedejeux: string;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ required: false }) nbdejeux: number;

  @Type(() => Number)
  @ApiProperty({ required: false }) nbcartes: number;

  @IsString()
  @ApiProperty({ required: false }) typedecarte: string;
}
