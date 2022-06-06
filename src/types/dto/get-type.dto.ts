import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class GetTypeDto {
  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly id: number;

  @ApiProperty({ required: false })
  @Type(() => String)
  readonly typedejeux: string;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly nbdejeux: number;

  @ApiProperty({ required: false })
  @Type(() => Number)
  readonly nbcartes: number;

  @ApiProperty({ required: false })
  @Type(() => String)
  readonly typedecarte: string;
}
