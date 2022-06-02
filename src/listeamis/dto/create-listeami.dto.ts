import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetListeamiDto } from './get-listami.dto';

export class CreateListeamiDto extends PartialType(GetListeamiDto) {

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  iduser: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  iduser2: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  statut: number;
}
