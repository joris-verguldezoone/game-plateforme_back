import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { AvatarsService } from '../service/avatars.service';
import { ApiTags } from '@nestjs/swagger';
import { AvatarInterface } from '../model/avatar.interface';
import { Avatar } from '../model/entities/avatar.entity';
import { CreateAvatarDto } from '../dto/create-avatar.dto';
import { UpdateAvatarDto } from '../dto/update-avatar.dto';
import { GetAvatarsDto } from '../dto/get-avatars.dto';

@ApiTags('avatar')
@Controller('avatars')
export class AvatarsController {
  constructor(private readonly avatarsService: AvatarsService) {}

  @Post()
  create(@Body() avatar: CreateAvatarDto): Promise<AvatarInterface> {
    return this.avatarsService.create(avatar);
  }
  @Get()
  getTask(@Query() filterDto: GetAvatarsDto): Promise<Avatar[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      return this.avatarsService.getAvatarsWithFilters(filterDto);
    } else {
      console.log('?????');
      return this.avatarsService.findAll();
    }
  }
  @Get(':id')
  findOne(@Param() params): Promise<Avatar> {
    return this.avatarsService.findOne(params.id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() avatar: UpdateAvatarDto,
  ): Promise<any> {
    return this.avatarsService.update(+id, avatar);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Avatar> {
    return this.avatarsService.remove(Number(id));
  }
}
