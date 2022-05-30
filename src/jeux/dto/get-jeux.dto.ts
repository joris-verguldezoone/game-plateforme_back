import { PartialType } from '@nestjs/swagger';
import { CreateJeuxDto } from './create-jeux.dto';
import { ApiProperty } from '@nestjs/swagger';
import {IsNumber, IsOptional, IsString} from 'class-validator';

export class GetJeuxDto extends PartialType(CreateJeuxDto) {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly id: number;
  @IsOptional()
  @IsString()
  @ApiProperty()
  readonly nom: string;
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  readonly idtype: number;
}
