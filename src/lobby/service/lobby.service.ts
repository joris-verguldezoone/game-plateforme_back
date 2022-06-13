import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, createQueryBuilder, Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Lobby } from '../model/entities/lobby.entity';
import { CreateLobbyDto } from '../dto/create-lobby.dto';
import { LobbyInterface } from "../model/lobby.interface";
import { UpdateLobbyDto } from "../dto/update-lobby.dto";
import { GetLobbyDto } from "../dto/get-lobby.dto";

@Injectable()
export class LobbyService {
  constructor(
    @InjectRepository(Lobby) private readonly lobbyRepository: Repository<Lobby>,
  ) { }

  create(lobby: CreateLobbyDto): Promise<LobbyInterface> {
    return this.lobbyRepository.save(lobby);
  }

  findAll(): Promise<Lobby[]> {
    return this.lobbyRepository.find();
  }

  update(id: number, lobby: UpdateLobbyDto): Promise<any> {
    return this.lobbyRepository.update(id, lobby);
  }

  remove(id: number): Promise<any> {
    return this.lobbyRepository.delete(id);
  }

  async getLobbyWithFilters(
    filterDto: GetLobbyDto,
  ): Promise<Lobby[]> {
    console.log(filterDto);
    const { id, nbMin, nbMax, idJeux, idRegle, idDifficulte, idUser, nomLobby } =
      filterDto;

    let lobby = await this.findAll();
    console.log(filterDto);
    if (id) {
      lobby = lobby.filter((task) => task.id == id);
    }
    if (nbMin) {
      lobby = lobby.filter((task) => task.nbMin == nbMin);
    }
    if (nbMax) {
      lobby = lobby.filter((task) => task.nbMax === nbMax);
    }
    if (idJeux) {
      lobby = lobby.filter((task) => task.idJeux === idJeux);
    }
    if (idDifficulte) {
      lobby = lobby.filter((task) => task.idDifficulte == idDifficulte,
      );
    }
    if (nomLobby) {
      lobby = lobby.filter((task) => task.nomLobby == nomLobby);
    }
    if (nomLobby) {
      lobby = lobby.filter((task) => task.nomLobby == nomLobby);
    }
    return lobby;
  }


}
