import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetAvatarsDto {

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly id: number;

  @ApiProperty({ required: false })
  readonly description: string;

  @ApiProperty({ required: false })
  readonly image: string;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly iduser: number;
}
