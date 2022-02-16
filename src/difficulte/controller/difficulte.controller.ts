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
import { DifficulteService } from '../service/difficulte.service';
import { CreateDifficulteDto } from '../dto/create-difficulte.dto';
import { UpdateDifficulteDto } from '../dto/update-difficulte.dto';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../../users/service/users.service';
import { UserInterface } from '../../users/model/user.interface';
import { Observable } from 'rxjs';
import { DifficulteInterface } from '../model/difficulte.interface';
import { Difficulte } from '../model/entities/difficulte.entity';

@ApiTags('difficulte')
@Controller('difficulte')
export class DifficulteController {
  constructor(private readonly difficulteService: DifficulteService) {}

  @Post()
  create(@Body() difficulte: Difficulte): Promise<Difficulte> {
    return this.difficulteService.create(difficulte);
  }

  @Get()
  findAll(): Promise<Difficulte[]> {
    return this.difficulteService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Difficulte> {
    return this.difficulteService.findOne(params.id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() difficulte: Difficulte,
  ): Promise<any> {
    return this.difficulteService.update(+id, difficulte);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Difficulte> {
    return this.difficulteService.remove(Number(id));
  }
}
