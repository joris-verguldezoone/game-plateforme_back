import { PartialType } from '@nestjs/swagger';
import { CreateScoreDto } from './create-score.dto';

export class UpdateScoreDto extends PartialType(CreateScoreDto) {
  readonly id: number;
  readonly score: number;
  readonly iduser: number;
  readonly idpartie: number;
}
