import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  idavatar: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  role: number;
}
