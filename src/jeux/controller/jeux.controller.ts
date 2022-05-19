import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { JeuxService } from '../service/jeux.service';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JeuxInterface } from '../model/jeux.interface';
import { Jeux } from '../model/entities/jeux.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateJeuxDto } from '../dto/create-jeux.dto';

@ApiTags('jeux')
@Controller('jeux')
export class JeuxController {
  constructor(private readonly jeuxService: JeuxService) {}

  @Post()
  create(@Body() jeux: Jeux): Promise<Jeux> {
    return this.jeuxService.create(jeux);
  }

  @Get()
  findAll(): Promise<Jeux[]> {
    return this.jeuxService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Jeux> {
    return this.jeuxService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() jeux: Jeux): Promise<any> {
    return this.jeuxService.update(+id, jeux);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Jeux> {
    return this.jeuxService.remove(Number(id));
  }
  @Get()
  getTask(@Query() filterDto: CreateJeuxDto): Promise<Jeux[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      return this.jeuxService.getGamesWithFilters(filterDto);
    } else {
      console.log('?????');
      return this.jeuxService.findAll();
    }
  }
}
