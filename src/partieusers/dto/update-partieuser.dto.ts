import { PartialType } from '@nestjs/swagger';
import { CreatePartieuserDto } from './create-partieuser.dto';

export class UpdatePartieuserDto extends PartialType(CreatePartieuserDto) {
  readonly id: number;
  readonly iduser: number;
  readonly idpartie: number;
  readonly statut: number;
}
