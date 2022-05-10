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
import { ReglesjeuxService } from '../service/reglesjeux.service';
import { ApiTags } from '@nestjs/swagger';
import { Reglesjeux } from '../model/entities/reglesjeux.entity';
import { GetReglesjeuxDto } from '../dto/get-reglesjeux.dto';

@ApiTags('regles_jeux')
@Controller('reglesjeux')
export class ReglesjeuxController {
  constructor(private readonly reglesjeuxService: ReglesjeuxService) { }

  @Post()
  create(@Body() reglesjeux: Reglesjeux): Promise<Reglesjeux> {
    return this.reglesjeuxService.create(reglesjeux);
  }

  // @Get()
  // findAll(): Promise<Reglesjeux[]> {
  //   return this.reglesjeuxService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param() params): Promise<Reglesjeux> {
  //   return this.reglesjeuxService.findOne(params.id);
  // }
  // test

  @Get()
  getTask(@Query() filterDto: GetReglesjeuxDto): Promise<Reglesjeux[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {

      console.log(filterDto);
      return this.reglesjeuxService.getGameRulesWithFilters(filterDto)
    }
    else {
      console.log('?????')
      return this.reglesjeuxService.findAll();
    }
  }

  // findOneIdGame(@Param() params): Promise<Reglesjeux> {
  //   return this.reglesjeuxService.findOne(params.idjeux);
  // }
  // @Get('idjeux/:id')
  // async getOneBy(@Query('idjeux') idjeux: string): Promise<Reglesjeux> {
  //   return await this.reglesjeuxService.findOneByIdJeux(idjeux);
  // }

  // test
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
