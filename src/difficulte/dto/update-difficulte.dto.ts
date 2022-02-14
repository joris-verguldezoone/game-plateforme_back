import { PartialType } from '@nestjs/swagger';
import { CreateDifficulteDto } from './create-difficulte.dto';

export class UpdateDifficulteDto extends PartialType(CreateDifficulteDto) {}
