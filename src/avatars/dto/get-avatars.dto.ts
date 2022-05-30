import { PartialType } from '@nestjs/swagger';
import { CreateAvatarDto } from './create-avatar.dto';
import { ApiProperty } from '@nestjs/swagger';

export class GetAvatarsDto extends PartialType(CreateAvatarDto) {

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly image: string;

  @ApiProperty()
  readonly iduser: number;
}
