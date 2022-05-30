import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDifficulteDto {
  // @IsNotEmpty()
  // @IsNumber()

  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  difficulte: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  multiplicateurscore: number;
}
