import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';
export class CreateScoreDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  score: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  iduser: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  idpartie: number;
}
