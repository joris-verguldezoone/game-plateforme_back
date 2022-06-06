import { PartialType } from '@nestjs/swagger';
import { CreateListeamiDto } from './create-listeami.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetListeamiDto {

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly id: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly iduser: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly iduser2: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly statut: number;
}

