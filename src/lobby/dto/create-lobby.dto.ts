import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetLobbyDto } from './get-lobby.dto';

export class CreateLobbyDto extends PartialType(GetLobbyDto) {
  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly id: number;

  @IsNumber()
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly nbMin: number;

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
