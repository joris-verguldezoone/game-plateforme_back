import { PartialType } from '@nestjs/swagger';
import { CreateListeamiDto } from './create-listeami.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetListeamiDto {

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  id: number;

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

