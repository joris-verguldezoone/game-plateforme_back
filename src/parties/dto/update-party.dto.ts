import { PartialType } from '@nestjs/swagger';
import { CreatePartyDto } from './create-party.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { GetPartyDto } from './get-party.dto';


export class UpdatePartyDto extends PartialType(GetPartyDto) {
  @ApiProperty()
  @Type(() => Number)
  readonly id: number;

  @ApiProperty()
  @Type(() => Number)
  readonly nbjoueurs: number;

  @ApiProperty()
  @Type(() => Number)
  readonly iddifficulte: number;

  @ApiProperty()
  @Type(() => Number)
  readonly idjeux: number;

  @ApiProperty()
  @Type(() => Number)
  idregle: number;

  @Type(() => Date)
  @ApiProperty()
  readonly createdat: Date;

  @ApiProperty()
  @Type(() => Date)
  readonly finishedat: Date;
}
