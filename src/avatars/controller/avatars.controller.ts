import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { AvatarsService } from '../service/avatars.service';
import {ApiTags} from "@nestjs/swagger";
import {UserInterface} from "../../users/model/user.interface";
import {Observable} from "rxjs";
import {AvatarInterface} from "../model/avatar.interface";

@ApiTags('avatar')
@Controller('avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) {}

  @Post()
  create( @Body() avatar: AvatarInterface):Observable<AvatarInterface> {
    return this.avatarsService.create(avatar);
  }

  @Get()
  findAll(): Observable<AvatarInterface[]> {
    return this.avatarsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Observable<AvatarInterface> {
    return this.avatarsService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() avatar:AvatarInterface): Observable<any> {
    return this.avatarsService.update(+id, avatar);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<AvatarInterface> {
    return this.avatarsService.remove(Number(id));
  }
}

