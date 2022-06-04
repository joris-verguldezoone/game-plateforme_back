import { PartialType } from '@nestjs/swagger';
import { CreateJeuxDto } from './create-jeux.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetJeuxDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly id: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  readonly nom: string;
  @IsOptional()

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly idtype: number;

}
