import { PartialType } from '@nestjs/swagger';
import { CreateListeamiDto } from './create-listeami.dto';

export class UpdateListeamiDto extends PartialType(CreateListeamiDto) {
  readonly id: number;
  readonly iduser: number;
  readonly iduser2: number;
  readonly statut: number;
}
