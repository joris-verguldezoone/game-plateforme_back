import { PartialType } from '@nestjs/swagger';
import { CreateJeuxDto } from './create-jeux.dto';
import { ApiProperty } from '@nestjs/swagger';



export class UpdateJeuxDto extends PartialType(CreateJeuxDto) {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly nom: string;
  @ApiProperty()
  readonly idtype: number;
}
