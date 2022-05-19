import { PartialType } from '@nestjs/swagger';
import { CreateDifficulteDto } from './create-difficulte.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDifficulteDto extends PartialType(CreateDifficulteDto) {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly difficulte: string;
  @ApiProperty()
  readonly multiplicateurscore: number;
}
