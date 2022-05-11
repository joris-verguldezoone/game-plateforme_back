import { PartialType } from '@nestjs/swagger';
import { CreateReglesjeuxDto } from './create-reglesjeux.dto';

export class UpdateReglesjeuxDto extends PartialType(CreateReglesjeuxDto) {
  readonly id: number;
  readonly idjeux: number;
  readonly nomregle: string;
  readonly regle: string;
  readonly iddifficulte: number;
  readonly nbjoueurmin: number;
  readonly nbjoueurmax: number;
}
