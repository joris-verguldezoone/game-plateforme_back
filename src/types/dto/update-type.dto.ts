import { PartialType } from '@nestjs/swagger';
import { CreateTypeDto } from './create-type.dto';

export class UpdateTypeDto extends PartialType(CreateTypeDto) {
  readonly id: number;
  readonly typedejeux: string;
  readonly nbdejeux: number;
  readonly nbcartes: number;
  readonly typedecarte: string;
}
