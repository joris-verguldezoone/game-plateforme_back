import { PartialType } from '@nestjs/swagger';
import { CreateJeuxDto } from './create-jeux.dto';

export class UpdateJeuxDto extends PartialType(CreateJeuxDto) {}
