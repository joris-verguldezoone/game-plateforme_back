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
import { PartieusersService } from '../service/partieusers.service';
import { ApiTags } from '@nestjs/swagger';
import { Partieuser } from '../model/entities/partieuser.entity';

@ApiTags('partie_user')
@Controller('partieusers')
export class PartieusersController {
  constructor(private readonly partieusersService: PartieusersService) {}

  @Post()
  create(@Body() partieuser: Partieuser): Promise<Partieuser> {
    return this.partieusersService.create(partieuser);
  }

  @Get()
  findAll(): Promise<Partieuser[]> {
    return this.partieusersService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Partieuser> {
    return this.partieusersService.findOne(params.id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() partieuser: Partieuser,
  ): Promise<any> {
    return this.partieusersService.update(+id, partieuser);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Partieuser> {
    return this.partieusersService.remove(Number(id));
  }
}
