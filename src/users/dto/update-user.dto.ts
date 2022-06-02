import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetUserDto } from './get-user.dto';

export class UpdateUserDto extends PartialType(GetUserDto) {
  @ApiProperty()
  @Type(() => Number)
  readonly id: number;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;

  // @Type(() => Number)
  @ApiProperty()
  readonly idavatar: number;

  @Type(() => Number)
  @ApiProperty()
  readonly role: number;
}
