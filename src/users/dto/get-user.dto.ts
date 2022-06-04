import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserDto {
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly id: number;

  @ApiProperty({ required: false })
  readonly username: string;

  @ApiProperty({ required: false })
  readonly password: string;

  @ApiProperty({ required: false })
  // @Type(() => Number) // ça peut etre un type null 
  readonly idavatar: number;

  @Type(() => Number)
  @ApiProperty({ required: false })
  readonly role: number;
}
