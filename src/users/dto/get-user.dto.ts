import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserDto {
  @ApiProperty()
  @Type(() => Number)
  readonly id: number;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  // @Type(() => Number)
  readonly idavatar: number;

  @Type(() => Number)
  @ApiProperty()
  readonly role: number;
}
