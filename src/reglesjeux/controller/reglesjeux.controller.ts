import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { ReglesjeuxService } from '../service/reglesjeux.service';
import { CreateReglesjeuxDto } from '../dto/create-reglesjeux.dto';
import { UpdateReglesjeuxDto } from '../dto/update-reglesjeux.dto';
import {ApiTags} from "@nestjs/swagger";
import {UserInterface} from "../../users/model/user.interface";
import {Observable} from "rxjs";
import {ReglesjeuxInterface} from "../model/reglesjeux.interface";
@ApiTags('regles_jeux')
@Controller('reglesjeux')
export class ReglesjeuxController {
  constructor(private readonly reglesjeuxService: ReglesjeuxService) {}

  @Post()
  create( @Body() reglesjeux: UserInterface):Observable<ReglesjeuxInterface> {
    return this.reglesjeuxService.create(reglesjeux);
  }

  @Get()
  findAll(): Observable<ReglesjeuxInterface[]> {
    return this.reglesjeuxService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Observable<ReglesjeuxInterface> {
    return this.reglesjeuxService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() reglesjeux:ReglesjeuxInterface ): Observable<any> {
    return this.reglesjeuxService.update(+id, reglesjeux);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<UserInterface> {
    return this.reglesjeuxService.remove(Number(id));
  }
}
