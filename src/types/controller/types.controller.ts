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
import { TypesService } from '../service/types.service';
import { ApiTags } from '@nestjs/swagger';
import { Type } from '../model/entities/type.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateTypeDto } from '../dto/create-type.dto';

@ApiTags('type')
@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  create(@Body() type: Type): Promise<Type> {
    return this.typesService.create(type);
  }

  @Get()
  findAll(): Promise<Type[]> {
    return this.typesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Type> {
    return this.typesService.findOne(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() type: Type): Promise<any> {
    return this.typesService.update(+id, type);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Type> {
    return this.typesService.remove(Number(id));
  }
  @Get()
  getTask(@Query() filterDto: CreateTypeDto): Promise<Type[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      return this.typesService.getTypesWithFilters(filterDto);
    } else {
      console.log('?????');
      return this.typesService.findAll();
    }
  }
}
