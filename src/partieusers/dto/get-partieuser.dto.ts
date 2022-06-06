import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreatePartieuserDto } from './create-partieuser.dto';


export class GetPartieuserDto {
  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly id: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly iduser: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly idpartie: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly statut: number;
}
