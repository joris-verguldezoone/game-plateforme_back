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
  ParseIntPipe, ValidationPipe, UsePipes,
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
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { GetDifficulteDto } from '../dto/get-difficulte.dto';

@ApiTags('difficulte')
@Controller('difficulte')
export class DifficulteController {
  constructor(private readonly difficulteService: DifficulteService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(
    @Body() difficulte: CreateDifficulteDto,
  ): Promise<DifficulteInterface> {
    return this.difficulteService.create(difficulte);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() difficulte: UpdateDifficulteDto,
  ): Promise<any> {
    return this.difficulteService.update(+id, difficulte);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Difficulte> {
    return this.difficulteService.remove(Number(id));
  }
  @Get('find')

  getTask(@Query() filterDto: GetDifficulteDto): Promise<Difficulte[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      return this.difficulteService.getDifficulteWithFilters(filterDto);
    } else {
      console.log('else');
      return this.difficulteService.findAll();
    }
  }
}
