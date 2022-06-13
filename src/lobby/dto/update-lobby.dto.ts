import { PartialType } from '@nestjs/swagger';
import { CreateLobbyDto } from './create-lobby.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetLobbyDto } from './get-lobby.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateLobbyDto extends PartialType(GetLobbyDto) {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly id: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @ApiProperty({ required: false })
  readonly nbMin: number;
  @IsOptional()

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly nbMax: number;

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly idJeux: number;

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly idRegle: number;

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly idDifficulte: number;

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly idUser: number;

  @IsString()
  @ApiProperty({ required: false })
  @Type(() => String)
  readonly nomLobby: string;

}
