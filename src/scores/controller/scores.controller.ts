import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put, Query,
} from '@nestjs/common';
import { ScoresService } from '../service/scores.service';
import { CreateScoreDto } from '../dto/create-score.dto';
import { UpdateScoreDto } from '../dto/update-score.dto';
import { UserInterface } from '../../users/model/user.interface';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { ScoresInterface } from '../model/scores.interface';
import { Score } from '../model/entities/score.entity';
import { CreateReglesjeuxDto } from "../../reglesjeux/dto/create-reglesjeux.dto";
import { Reglesjeux } from "../../reglesjeux/model/entities/reglesjeux.entity";
import { GetScoreDto } from '../dto/get-score.dto';
@ApiTags('scores')
@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) { }

  @Post()
  create(@Body() score: CreateScoreDto): Promise<ScoresInterface> {
    return this.scoresService.create(score);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() score: UpdateScoreDto): Promise<any> {
    return this.scoresService.update(+id, score);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Score> {
    return this.scoresService.remove(Number(id));
  }
  @Get('find')
  getTask(@Query() filterDto: GetScoreDto): Promise<Score[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      return this.scoresService.getScoresWithFilters(filterDto);
    } else {
      console.log('?????');
      return this.scoresService.findAll();
    }
  }
}
