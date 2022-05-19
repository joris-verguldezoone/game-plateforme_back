import { PartialType } from '@nestjs/swagger';
import { CreatePartieuserDto } from './create-partieuser.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePartieuserDto extends PartialType(CreatePartieuserDto) {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly iduser: number;
  @ApiProperty()
  readonly idpartie: number;
  @ApiProperty()
  readonly statut: number;
}
