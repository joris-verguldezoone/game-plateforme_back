import { PartialType } from '@nestjs/swagger';
import { CreateScoreDto } from './create-score.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetScoreDto } from './get-score.dto';



export class UpdateScoreDto extends PartialType(GetScoreDto) {
  @Type(() => Number)
  @ApiProperty()
  readonly id: number;
  @Type(() => Number)
  @ApiProperty()
  readonly score: number;
  @Type(() => Number)
  @ApiProperty()
  readonly iduser: number;
  @Type(() => Number)
  @ApiProperty()
  readonly idpartie: number;
}
