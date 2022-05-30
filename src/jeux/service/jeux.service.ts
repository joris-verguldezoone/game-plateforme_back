import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Jeux } from '../model/entities/jeux.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateJeuxDto } from '../dto/create-jeux.dto';
import {JeuxInterface} from "../model/jeux.interface";
import {UpdateJeuxDto} from "../dto/update-jeux.dto";
import {GetJeuxDto} from "../dto/get-jeux.dto";

@Injectable()
export class JeuxService {
  constructor(
    @InjectRepository(Jeux) private readonly jeuxRepository: Repository<Jeux>,
  ) {}

  create(jeux: CreateJeuxDto): Promise<JeuxInterface> {
    return this.jeuxRepository.save(jeux);
  }

  findAll(): Promise<Jeux[]> {
    return this.jeuxRepository.find();
  }

  findOne(id: number) {
    return this.jeuxRepository.findOne({ id });
  }

  update(id: number, jeux: UpdateJeuxDto): Promise<any> {
    return this.jeuxRepository.update(id, jeux);
  }

  remove(id: number): Promise<any> {
    return this.jeuxRepository.delete(id);
  }
  async getGamesWithFilters(filterDto: GetJeuxDto): Promise<Jeux[]> {

    const { nom, idtype } = filterDto;

    let reglesJeux = await this.findAll();

    if (nom) {
      reglesJeux = reglesJeux.filter((task) => task.nom === nom);
    }
    if (idtype) {
      reglesJeux = reglesJeux.filter((task) => task.idtype == idtype);
    }
    return reglesJeux;
  }
}
