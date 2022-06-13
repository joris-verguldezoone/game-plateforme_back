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
import { LobbyService } from '../service/lobby.service';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { LobbyInterface } from '../model/lobby.interface';
import { Lobby } from '../model/entities/lobby.entity';
import { CreateLobbyDto } from '../../lobby/dto/create-lobby.dto';
import { UpdateLobbyDto } from "../dto/update-lobby.dto";
import { GetLobbyDto } from "../dto/get-lobby.dto";

@ApiTags('lobby')
@Controller('lobby')
export class LobbyController {
  constructor(private readonly lobbyService: LobbyService) { }

  @Post()
  create(@Body() lobby: CreateLobbyDto): Promise<LobbyInterface> {
    return this.lobbyService.create(lobby);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() lobby: UpdateLobbyDto): Promise<any> {
    return this.lobbyService.update(+id, lobby);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Lobby> {
    return this.lobbyService.remove(Number(id));
  }
  @Get(('find'))
  getTask(@Query() filterDto: GetLobbyDto): Promise<Lobby[]> {
    if (Object.keys(filterDto).length) {
      return this.lobbyService.getLobbyWithFilters(filterDto);
    } else {
      return this.lobbyService.findAll();
    }
  }
}
