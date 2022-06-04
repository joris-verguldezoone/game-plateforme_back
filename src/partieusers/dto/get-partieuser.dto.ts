import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreatePartieuserDto } from './create-partieuser.dto';


export class GetPartieuserDto {
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ required: false })
  id: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ required: false })
  iduser: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ required: false })
  idpartie: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ required: false })
  statut: number;
}
