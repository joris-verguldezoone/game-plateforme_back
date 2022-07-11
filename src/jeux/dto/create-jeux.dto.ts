import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetJeuxDto } from './get-jeux.dto';

export class CreateJeuxDto extends PartialType(GetJeuxDto) {

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => String)
  nom: string;

  @IsNotEmpty()
  @ApiProperty()
  @Type(() => Number)
  idtype: number;
}
