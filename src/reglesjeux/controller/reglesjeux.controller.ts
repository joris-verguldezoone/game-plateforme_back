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
import { ReglesjeuxService } from '../service/reglesjeux.service';
import { ApiTags } from '@nestjs/swagger';
import { Reglesjeux } from '../model/entities/reglesjeux.entity';

@ApiTags('regles_jeux')
@Controller('reglesjeux')
export class ReglesjeuxController {
  constructor(private readonly reglesjeuxService: ReglesjeuxService) {}

  @Post()
  create(@Body() reglesjeux: Reglesjeux): Promise<Reglesjeux> {
    return this.reglesjeuxService.create(reglesjeux);
  }

  @Get()
  findAll(): Promise<Reglesjeux[]> {
    return this.reglesjeuxService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Reglesjeux> {
    return this.reglesjeuxService.findOne(params.id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() reglesjeux: Reglesjeux,
  ): Promise<any> {
    return this.reglesjeuxService.update(+id, reglesjeux);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Reglesjeux> {
    return this.reglesjeuxService.remove(Number(id));
  }
}
