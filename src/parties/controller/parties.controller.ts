import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put, Query,
} from '@nestjs/common';
import { PartiesService } from '../service/parties.service';
import { ApiTags } from '@nestjs/swagger';
import { Partie } from '../model/entities/party.entity';
import { CreateReglesjeuxDto } from "../../reglesjeux/dto/create-reglesjeux.dto";
import { Reglesjeux } from "../../reglesjeux/model/entities/reglesjeux.entity";
import { CreatePartyDto } from "../dto/create-party.dto";
import { PartiesInterface } from "../model/parties.interface";
import { UpdatePartyDto } from "../dto/update-party.dto";

@ApiTags('parties')
@Controller('parties')
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) { }

  @Post()
  create(@Body() partie: CreatePartyDto): Promise<PartiesInterface> {
    return this.partiesService.create(partie);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UpdatePartyDto): Promise<any> {
    return this.partiesService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Partie> {
    return this.partiesService.remove(Number(id));
  }
  @Get('find')
  getTask(@Query() filterDto: CreatePartyDto): Promise<Partie[]> {
    console.log(filterDto);
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      return this.partiesService.getPartiesWithFilters(filterDto);
    } else {
      console.log('?????');
      return this.partiesService.findAll();
    }
  }
}
