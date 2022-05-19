import { PartialType } from '@nestjs/swagger';
import { CreateTypeDto } from './create-type.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateTypeDto extends PartialType(CreateTypeDto) {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly typedejeux: string;
  @ApiProperty()
  readonly nbdejeux: number;
  @ApiProperty()
  readonly nbcartes: number;
  @ApiProperty()
  readonly typedecarte: string;
}
