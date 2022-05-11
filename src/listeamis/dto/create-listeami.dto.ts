import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateListeamiDto {
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
  iduser2: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  statut: number;
}
