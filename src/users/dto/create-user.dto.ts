import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { GetUserDto } from './get-user.dto';

export class CreateUserDto extends PartialType(GetUserDto) {


  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  // @Type(() => null)
  // @IsNumber()
  @ApiProperty()
  // @ValidateIf(idavatar => idavatar.otherProperty === null)
  idavatar: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty()
  role: number;
}
