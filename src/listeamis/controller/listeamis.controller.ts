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
import { ListeamisService } from '../service/listeamis.service';

import { ApiTags } from '@nestjs/swagger';

import { Listeamis } from '../model/entities/listeami.entity';

@ApiTags('liste_amis')
@Controller('listeamis')
export class ListeamisController {
  constructor(private readonly listeamisService: ListeamisService) {}
  @Post()
  create(@Body() listeamis: Listeamis): Promise<Listeamis> {
    return this.listeamisService.create(listeamis);
  }

  @Get()
  findAll(): Promise<Listeamis[]> {
    return this.listeamisService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Listeamis> {
    return this.listeamisService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() listeamis: Listeamis): Promise<any> {
    return this.listeamisService.update(+id, listeamis);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Listeamis> {
    return this.listeamisService.remove(Number(id));
  }
}
