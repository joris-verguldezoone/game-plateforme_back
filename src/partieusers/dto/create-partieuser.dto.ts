import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePartieuserDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  iduser: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  idpartie: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  statut: number;
}
