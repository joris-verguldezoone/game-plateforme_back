import { PartialType } from '@nestjs/swagger';
import { CreateDifficulteDto } from './create-difficulte.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetDifficulteDto } from './get-difficulte.dto';

export class UpdateDifficulteDto extends PartialType(GetDifficulteDto) {
  @ApiProperty()
  @Type(() => Number)
  readonly id: number;

  @ApiProperty()
  readonly difficulte: string;

  @ApiProperty()
  @Type(() => Number)
  readonly multiplicateurscore: number;
}
