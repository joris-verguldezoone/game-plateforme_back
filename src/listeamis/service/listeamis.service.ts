import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listeamis } from '../model/entities/listeami.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateListeamiDto } from '../dto/create-listeami.dto';
import {ListeamisInterface} from "../model/listeamis.interface";
import {UpdateListeamiDto} from "../dto/update-listeami.dto";

@Injectable()
export class ListeamisService {
  constructor(
    @InjectRepository(Listeamis)
    private readonly listeamisRepository: Repository<Listeamis>,
  ) {}

  create(listeamis: CreateListeamiDto): Promise<ListeamisInterface> {
    return this.listeamisRepository.save(listeamis);
  }

  findAll(): Promise<Listeamis[]> {
    return this.listeamisRepository.find();
  }

  findOne(id: number) {
    return this.listeamisRepository.findOne({ id });
  }

  update(id: number, listeamis: UpdateListeamiDto): Promise<any> {
    return this.listeamisRepository.update(id, listeamis);
  }

  remove(id: number): Promise<any> {
    return this.listeamisRepository.delete(id);
  }
  async getListeAmisWithFilters(
    filterDto: CreateListeamiDto,
  ): Promise<Listeamis[]> {
    console.log(filterDto);
    const { iduser, iduser2, statut } = filterDto;

    let reglesJeux = await this.findAll();

    if (iduser) {
      reglesJeux = reglesJeux.filter((task) => task.iduser == iduser);
    }
    if (iduser2) {
      reglesJeux = reglesJeux.filter((task) => task.iduser2 == iduser2);
    }
    if (statut) {
      reglesJeux = reglesJeux.filter((task) => task.statut == statut);
    }
    return reglesJeux;
  }
}
