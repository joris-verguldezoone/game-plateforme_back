import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { JeuxService } from '../service/jeux.service';
import { CreateJeuxDto } from '../dto/create-jeux.dto';
import { UpdateJeuxDto } from '../dto/update-jeux.dto';
import {ApiTags} from "@nestjs/swagger";
import {UserInterface} from "../../users/model/user.interface";
import {Observable} from "rxjs";
import {JeuxInterface} from "../model/jeux.interface";

@ApiTags('jeux')
@Controller('jeux')
export class JeuxController {
  constructor(private readonly jeuxService: JeuxService) {}

  @Post()
  create( @Body() jeux: JeuxInterface):Observable<JeuxInterface> {
    return this.jeuxService.create(jeux);
  }

  @Get()
  findAll(): Observable<JeuxInterface[]> {
    return this.jeuxService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Observable<JeuxInterface> {
    return this.jeuxService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() jeux:JeuxInterface ): Observable<any> {
    return this.jeuxService.update(+id, jeux);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<JeuxInterface> {
    return this.jeuxService.remove(Number(id));
  }
}
