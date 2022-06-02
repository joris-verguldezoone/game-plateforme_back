import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetTypeDto } from './get-type.dto';


export class UpdateTypeDto extends PartialType(GetTypeDto) {
  @Type(() => Number)
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly typedejeux: string;
  @Type(() => Number)
  @ApiProperty()
  readonly nbdejeux: number;
  @Type(() => Number)
  @ApiProperty()
  readonly nbcartes: number;
  @ApiProperty()
  readonly typedecarte: string;
}
