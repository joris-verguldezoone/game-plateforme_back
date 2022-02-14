import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { TypesService } from '../service/types.service';
import { CreateTypeDto } from '../dto/create-type.dto';
import { UpdateTypeDto } from '../dto/update-type.dto';
import {ApiTags} from "@nestjs/swagger";
import {UserInterface} from "../../users/model/user.interface";
import {Observable} from "rxjs";
import {TypesInterface} from "../model/types.interface";
@ApiTags('type')
@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  create( @Body() type: TypesInterface):Observable<TypesInterface> {
    return this.typesService.create(type);
  }

  @Get()
  findAll(): Observable<TypesInterface[]> {
    return this.typesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Observable<TypesInterface> {
    return this.typesService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() type:TypesInterface ): Observable<any> {
    return this.typesService.update(+id, type);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<UserInterface> {
    return this.typesService.remove(Number(id));
  }
}
