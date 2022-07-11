import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, } from '@nestjs/common';
import { JeuxService } from '../service/jeux.service';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JeuxInterface } from '../model/jeux.interface';
import { Jeux } from '../model/entities/jeux.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateJeuxDto } from '../dto/create-jeux.dto';
import { UpdateJeuxDto } from "../dto/update-jeux.dto";
import { GetJeuxDto } from "../dto/get-jeux.dto";

@ApiTags('jeux')
@Controller('jeux')
export class JeuxController {
  constructor(private readonly jeuxService: JeuxService) { }

  @Post()
  create(@Body() jeux: CreateJeuxDto): Promise<JeuxInterface> {
    return this.jeuxService.create(jeux);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() jeux: UpdateJeuxDto): Promise<any> {
    return this.jeuxService.update(+id, jeux);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Jeux> {
    return this.jeuxService.remove(Number(id));
  }
  @Get(('find'))
  getTask(@Query() filterDto: GetJeuxDto): Promise<Jeux[]> {
    if (Object.keys(filterDto).length) {
      return this.jeuxService.getGamesWithFilters(filterDto);
    } else {
      return this.jeuxService.findAll();
    }
  }
}
