import { PartialType } from '@nestjs/swagger';
import { CreateListeamiDto } from './create-listeami.dto';

export class UpdateListeamiDto extends PartialType(CreateListeamiDto) {}
