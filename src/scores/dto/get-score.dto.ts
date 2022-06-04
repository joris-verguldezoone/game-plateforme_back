import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { CreateScoreDto } from './create-score.dto';

export class GetScoreDto {
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ required: false }) id: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ required: false }) score: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ required: false }) iduser: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ required: false }) idpartie: number;
}
