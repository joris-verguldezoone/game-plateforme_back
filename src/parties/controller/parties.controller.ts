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
import { PartiesService } from '../service/parties.service';
import { ApiTags } from '@nestjs/swagger';
import { Partie } from '../model/entities/party.entity';

@ApiTags('parties')
@Controller('parties')
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}

  @Post()
  create(@Body() partie: Partie): Promise<Partie> {
    return this.partiesService.create(partie);
  }

  @Get()
  findAll(): Promise<Partie[]> {
    return this.partiesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Partie> {
    return this.partiesService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: Partie): Promise<any> {
    return this.partiesService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Partie> {
    return this.partiesService.remove(Number(id));
  }
}
