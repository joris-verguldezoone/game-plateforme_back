import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { CreateScoreDto } from './create-score.dto';

export class GetScoreDto {
  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly id: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly score: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly iduser: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly idpartie: number;
}
