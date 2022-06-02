import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetPartieuserDto } from './get-partieuser.dto';

export class CreatePartieuserDto extends PartialType(GetPartieuserDto) {

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  iduser: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  idpartie: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  statut: number;
}
