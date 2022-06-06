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
import { TypesInterface } from "../model/types.interface";
import { UpdateTypeDto } from "../dto/update-type.dto";
import { GetTypeDto } from '../dto/get-type.dto';

@ApiTags('type')
@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) { }

  @Post()
  create(@Body() type: CreateTypeDto): Promise<TypesInterface> {
    return this.typesService.create(type);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() type: UpdateTypeDto): Promise<any> {
    return this.typesService.update(+id, type);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Type> {
    return this.typesService.remove(Number(id));
  }
  @Get('find')
  getTask(@Query() filterDto: GetTypeDto): Promise<Type[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      console.log("we are in controller")
      return this.typesService.getTypesWithFilters(filterDto);
    } else {
      console.log('?????');
      return this.typesService.findAll();
    }
  }
}
