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
import { JeuxService } from '../service/jeux.service';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JeuxInterface } from '../model/jeux.interface';
import { Jeux } from '../model/entities/jeux.entity';

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
}
