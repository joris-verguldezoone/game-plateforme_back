import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJeuxDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nom: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  idtype: number;
}
