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
import { AvatarsService } from '../service/avatars.service';
import { ApiTags } from '@nestjs/swagger';
import { UserInterface } from '../../users/model/user.interface';
import { AvatarInterface } from '../model/avatar.interface';
import { Avatar } from '../model/entities/avatar.entity';

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
}
