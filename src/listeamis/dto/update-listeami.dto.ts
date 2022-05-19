import { PartialType } from '@nestjs/swagger';
import { CreateListeamiDto } from './create-listeami.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateListeamiDto extends PartialType(CreateListeamiDto) {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly iduser: number;
  @ApiProperty()
  readonly iduser2: number;
  @ApiProperty()
  readonly statut: number;
}
