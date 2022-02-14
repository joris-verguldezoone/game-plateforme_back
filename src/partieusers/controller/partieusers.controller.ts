import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { PartieusersService } from '../service/partieusers.service';
import { CreatePartieuserDto } from '../dto/create-partieuser.dto';
import { UpdatePartieuserDto } from '../dto/update-partieuser.dto';
import {ApiTags} from "@nestjs/swagger";
import {UserInterface} from "../../users/model/user.interface";
import {Observable} from "rxjs";
import {PartieusersInterface} from "../model/partieusers.interface";

@ApiTags('partie_user')
@Controller('partieusers')
export class PartieusersController {
  constructor(private readonly partieusersService: PartieusersService) {}

  @Post()
  create( @Body() partieuser: PartieusersInterface):Observable<PartieusersInterface> {
    return this.partieusersService.create(partieuser);
  }

  @Get()
  findAll(): Observable<PartieusersInterface[]> {
    return this.partieusersService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Observable<PartieusersInterface> {
    return this.partieusersService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() partieuser:PartieusersInterface ): Observable<any> {
    return this.partieusersService.update(+id, partieuser);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<PartieusersInterface> {
    return this.partieusersService.remove(Number(id));
  }
}
