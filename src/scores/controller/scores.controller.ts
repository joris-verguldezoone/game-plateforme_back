import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ScoresService } from '../service/scores.service';
import { CreateScoreDto } from '../dto/create-score.dto';
import { UpdateScoreDto } from '../dto/update-score.dto';
import { UserInterface } from '../../users/model/user.interface';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { ScoresInterface } from '../model/scores.interface';
import { Score } from '../model/entities/score.entity';
@ApiTags('scores')
@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  create(@Body() score: Score): Promise<Score> {
    return this.scoresService.create(score);
  }

  @Get()
  findAll(): Promise<Score[]> {
    return this.scoresService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Score> {
    return this.scoresService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() score: Score): Promise<any> {
    return this.scoresService.update(+id, score);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Score> {
    return this.scoresService.remove(Number(id));
  }
}
