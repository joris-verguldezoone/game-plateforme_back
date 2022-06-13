import { PartialType } from '@nestjs/swagger';
import { CreateLobbyDto } from './create-lobby.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetLobbyDto {
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly id: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly nbMin: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly nbMax: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly idJeux: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly idRegle: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly idDifficulte: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly idUser: number;

  @ApiProperty({ required: false })
  @Type(() => String)
  readonly nomLobby: string;

}
