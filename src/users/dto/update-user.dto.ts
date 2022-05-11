import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly id: number;
  readonly username: string;
  readonly password: string;
  readonly idavatar: number;
  readonly role: number;
}
