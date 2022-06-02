import { PartialType } from '@nestjs/swagger';
import { CreatePartieuserDto } from './create-partieuser.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetPartieuserDto } from './get-partieuser.dto';

export class UpdatePartieuserDto extends PartialType(GetPartieuserDto) {
  @Type(() => Number)
  @ApiProperty()
  readonly id: number;
  @Type(() => Number)
  @ApiProperty()
  readonly iduser: number;
  @Type(() => Number)
  @ApiProperty()
  readonly idpartie: number;
  @Type(() => Number)
  @ApiProperty()
  readonly statut: number;
}
