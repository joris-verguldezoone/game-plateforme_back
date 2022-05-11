import { PartialType } from '@nestjs/swagger';
import { CreateAvatarDto } from './create-avatar.dto';

export class UpdateAvatarDto extends PartialType(CreateAvatarDto) {
  readonly id: number;
  readonly description: string;
  readonly image: string;
  readonly iduser: number;
}
