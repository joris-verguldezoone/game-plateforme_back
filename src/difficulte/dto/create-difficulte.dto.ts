import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetDifficulteDto } from './get-difficulte.dto';

export class CreateDifficulteDto extends PartialType(GetDifficulteDto) {
  // @IsNotEmpty()
  // @IsNumber

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  difficulte: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  multiplicateurscore: number;
}
