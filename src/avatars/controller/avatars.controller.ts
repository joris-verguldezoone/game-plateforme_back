import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put, Query,
} from '@nestjs/common';
import { AvatarsService } from '../service/avatars.service';
import { ApiTags } from '@nestjs/swagger';
import { UserInterface } from '../../users/model/user.interface';
import { AvatarInterface } from '../model/avatar.interface';
import { Avatar } from '../model/entities/avatar.entity';
import {CreateReglesjeuxDto} from "../../reglesjeux/dto/create-reglesjeux.dto";
import {Reglesjeux} from "../../reglesjeux/model/entities/reglesjeux.entity";
import {CreateAvatarDto} from "../dto/create-avatar.dto";

@ApiTags('avatar')
@Controller('avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) {}

  @Post()
  create(@Body() avatar: Avatar): Promise<Avatar> {
    return this.avatarsService.create(avatar);
  }

  @Get()
  findAll(): Promise<Avatar[]> {
    return this.avatarsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Avatar> {
    return this.avatarsService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() avatar: Avatar): Promise<any> {
    return this.avatarsService.update(+id, avatar);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Avatar> {
    return this.avatarsService.remove(Number(id));
  }
  @Get()
  getTask(@Query() filterDto: CreateAvatarDto): Promise<Avatar[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      return this.avatarsService.getAvatarsWithFilters(filterDto);
    } else {
      console.log('?????');
      return this.avatarsService.findAll();
    }
  }
}
