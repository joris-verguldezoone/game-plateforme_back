import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { PartiesService } from '../service/parties.service';
import {ApiTags} from "@nestjs/swagger";
import {Observable} from "rxjs";
import {PartiesInterface} from "../model/parties.interface";

@ApiTags('parties')
@Controller('parties')
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}

  @Post()
  create( @Body() user: PartiesInterface):Observable<PartiesInterface> {
    return this.partiesService.create(user);
  }

  @Get()
  findAll(): Observable<PartiesInterface[]> {
    return this.partiesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Observable<PartiesInterface> {
    return this.partiesService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user:PartiesInterface ): Observable<any> {
    return this.partiesService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<PartiesInterface> {
    return this.partiesService.remove(Number(id));
  }
}
