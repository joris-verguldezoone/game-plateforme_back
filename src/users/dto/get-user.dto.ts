import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly idavatar: number;

  @ApiProperty()
  readonly role: number;
}
