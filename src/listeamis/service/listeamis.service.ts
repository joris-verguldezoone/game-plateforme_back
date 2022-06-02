import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listeamis } from '../model/entities/listeami.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateListeamiDto } from '../dto/create-listeami.dto';
import { ListeamisInterface } from "../model/listeamis.interface";
import { UpdateListeamiDto } from "../dto/update-listeami.dto";
import { GetListeamiDto } from "../dto/get-listami.dto";
@Injectable()
export class ListeamisService {
  constructor(
    @InjectRepository(Listeamis)
    private readonly listeamisRepository: Repository<Listeamis>,
  ) { }

  create(listeamis: CreateListeamiDto): Promise<ListeamisInterface> {
    return this.listeamisRepository.save(listeamis);
  }

  findAll(): Promise<Listeamis[]> {
    return this.listeamisRepository.find();
  }

  update(id: number, listeamis: UpdateListeamiDto): Promise<any> {
    return this.listeamisRepository.update(id, listeamis);
  }

  remove(id: number): Promise<any> {
    return this.listeamisRepository.delete(id);
  }
  async getListeAmisWithFilters(
    filterDto: GetListeamiDto,
  ): Promise<Listeamis[]> {
    console.log(filterDto);
    const { iduser, iduser2, statut, id } = filterDto;

    let listamis = await this.findAll();

    if (id) {
      listamis = listamis.filter((task) => task.id == id);
    }

    if (iduser) {
      listamis = listamis.filter((task) => task.iduser == iduser);
    }
    if (iduser2) {
      listamis = listamis.filter((task) => task.iduser2 == iduser2);
    }
    if (statut) {
      listamis = listamis.filter((task) => task.statut == statut);
    }
    return listamis;
  }
}
