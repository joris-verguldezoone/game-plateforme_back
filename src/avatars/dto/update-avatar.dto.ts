import { PartialType } from '@nestjs/swagger';
import { CreateAvatarDto } from './create-avatar.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateAvatarDto extends PartialType(CreateAvatarDto) {

  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly image: string;

  @ApiProperty()
  readonly iduser: number;
}
