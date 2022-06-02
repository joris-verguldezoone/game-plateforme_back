import { PartialType } from '@nestjs/swagger';
import { CreateJeuxDto } from './create-jeux.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetJeuxDto } from './get-jeux.dto';

export class UpdateJeuxDto extends PartialType(GetJeuxDto) {
  @ApiProperty()
  @Type(() => Number)
  readonly id: number;
  @ApiProperty()
  readonly nom: string;
  @ApiProperty()
  @Type(() => Number)
  readonly idtype: number;
}
