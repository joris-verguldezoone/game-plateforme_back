import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetAvatarsDto {

  @ApiProperty()
  @Type(() => Number)
  readonly id: number;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly image: string;

  @ApiProperty()
  @Type(() => Number)
  readonly iduser: number;
}
