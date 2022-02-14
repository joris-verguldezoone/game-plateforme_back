import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { ScoresService } from '../service/scores.service';
import { CreateScoreDto } from '../dto/create-score.dto';
import { UpdateScoreDto } from '../dto/update-score.dto';
import {UserInterface} from "../../users/model/user.interface";
import {Observable} from "rxjs";
import {ApiTags} from "@nestjs/swagger";
import {ScoresInterface} from "../model/scores.interface";
@ApiTags('scores')
@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post()
  create( @Body() score: ScoresInterface):Observable<ScoresInterface> {
    return this.scoresService.create(score);
  }

  @Get()
  findAll(): Observable<ScoresInterface[]> {
    return this.scoresService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Observable<ScoresInterface> {
    return this.scoresService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() score:ScoresInterface ): Observable<any> {
    return this.scoresService.update(+id, score);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<ScoresInterface> {
    return this.scoresService.remove(Number(id));
  }
}
