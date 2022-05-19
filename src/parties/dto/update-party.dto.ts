import { PartialType } from '@nestjs/swagger';
import { CreatePartyDto } from './create-party.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdatePartyDto extends PartialType(CreatePartyDto) {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly nbjoueurs: number;
  @ApiProperty()
  readonly iddifficulte: number;
  @ApiProperty()
  readonly idjeux: number;
  @ApiProperty()
  readonly createdat: Date;
  @ApiProperty()
  readonly finishedat: Date;
}
