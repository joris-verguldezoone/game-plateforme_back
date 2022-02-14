import { PartialType } from '@nestjs/swagger';
import { CreateReglesjeuxDto } from './create-reglesjeux.dto';

export class UpdateReglesjeuxDto extends PartialType(CreateReglesjeuxDto) {}
