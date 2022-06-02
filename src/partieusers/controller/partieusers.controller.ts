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
import { PartieusersService } from '../service/partieusers.service';
import { ApiTags } from '@nestjs/swagger';
import { Partieuser } from '../model/entities/partieuser.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreatePartieuserDto } from '../dto/create-partieuser.dto';
import { PartieusersInterface } from "../model/partieusers.interface";
import { UpdatePartieuserDto } from "../dto/update-partieuser.dto";
import { GetPartieuserDto } from '../dto/get-partieuser.dto';

@ApiTags('partie_user')
@Controller('partieusers')
export class PartieusersController {
  constructor(private readonly partieusersService: PartieusersService) { }

  @Post()
  create(@Body() partieuser: CreatePartieuserDto): Promise<PartieusersInterface> {
    return this.partieusersService.create(partieuser);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() partieuser: UpdatePartieuserDto,
  ): Promise<any> {
    return this.partieusersService.update(+id, partieuser);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Partieuser> {
    return this.partieusersService.remove(Number(id));
  }
  @Get('find')
  getTask(@Query() filterDto: GetPartieuserDto): Promise<Partieuser[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      return this.partieusersService.getPartieusersWithFilters(filterDto);
    } else {
      console.log('?????');
      return this.partieusersService.findAll();
    }
  }
}
