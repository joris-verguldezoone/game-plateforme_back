import { PartialType } from '@nestjs/swagger';
import { CreateScoreDto } from './create-score.dto';
import { ApiProperty } from '@nestjs/swagger';



export class UpdateScoreDto extends PartialType(CreateScoreDto) {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly score: number;
  @ApiProperty()
  readonly iduser: number;
  @ApiProperty()
  readonly idpartie: number;
}
