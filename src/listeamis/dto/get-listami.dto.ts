import { PartialType } from '@nestjs/swagger';
import { CreateListeamiDto } from './create-listeami.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetListeamiDto {

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  id: number;

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  iduser: number;

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  iduser2: number;

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  statut: number;
}

