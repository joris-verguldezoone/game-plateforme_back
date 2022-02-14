import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { ListeamisService } from '../service/listeamis.service';
import { CreateListeamiDto } from '../dto/create-listeami.dto';
import { UpdateListeamiDto } from '../dto/update-listeami.dto';
import {ApiTags} from "@nestjs/swagger";
import {UserInterface} from "../../users/model/user.interface";
import {Observable} from "rxjs";
import {ListeamisInterface} from "../model/listeamis.interface";

@ApiTags('liste_amis')
@Controller('listeamis')
export class ListeamisController {
  constructor(private readonly listeamisService: ListeamisService) {}
  @Post()
  create( @Body() listeamis: ListeamisInterface):Observable<ListeamisInterface> {
    return this.listeamisService.create(listeamis);
  }

  @Get()
  findAll(): Observable<ListeamisInterface[]> {
    return this.listeamisService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Observable<ListeamisInterface> {
    return this.listeamisService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() listeamis:ListeamisInterface ): Observable<any> {
    return this.listeamisService.update(+id, listeamis);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<ListeamisInterface> {
    return this.listeamisService.remove(Number(id));
  }
}
