import { PartialType } from '@nestjs/swagger';
import { CreatePartyDto } from './create-party.dto';

export class UpdatePartyDto extends PartialType(CreatePartyDto) {
  readonly id: number;
  readonly nbjoueurs: number;
  readonly iddifficulte: number;
  readonly idjeux: number;
  readonly createdat: Date;
  readonly finishedat: Date;
}
