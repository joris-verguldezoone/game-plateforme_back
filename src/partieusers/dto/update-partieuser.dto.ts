import { PartialType } from '@nestjs/swagger';
import { CreatePartieuserDto } from './create-partieuser.dto';

export class UpdatePartieuserDto extends PartialType(CreatePartieuserDto) {}
