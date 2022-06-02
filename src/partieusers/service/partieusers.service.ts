import { Injectable } from '@nestjs/common';
import { CreatePartieuserDto } from '../dto/create-partieuser.dto';
import { UpdatePartieuserDto } from '../dto/update-partieuser.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { UserInterface } from '../../users/model/user.interface';
import { from, Observable } from 'rxjs';
import { Partieuser } from '../model/entities/partieuser.entity';
import { PartieusersInterface } from '../model/partieusers.interface';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { GetPartieuserDto } from '../dto/get-partieuser.dto';

@Injectable()
export class PartieusersService {
  constructor(
    @InjectRepository(Partieuser)
    private readonly partieuserRepository: Repository<Partieuser>,
  ) { }

  create(partiesuser: CreatePartieuserDto): Promise<PartieusersInterface> {
    return this.partieuserRepository.save(partiesuser);
  }

  findAll(): Promise<Partieuser[]> {
    return this.partieuserRepository.find();
  }

  update(id: number, partiesuser: UpdatePartieuserDto): Promise<any> {
    return this.partieuserRepository.update(id, partiesuser);
  }

  remove(id: number): Promise<any> {
    return this.partieuserRepository.delete(id);
  }
  async getPartieusersWithFilters(
    filterDto: GetPartieuserDto,
  ): Promise<Partieuser[]> {
    console.log(filterDto);
    const { iduser, idpartie, statut, id } = filterDto;

    let partieUser = await this.findAll();

    if (id) {
      partieUser = partieUser.filter((task) => task.id == id);
    }
    if (iduser) {
      partieUser = partieUser.filter((task) => task.iduser == iduser);
    }
    if (idpartie) {
      partieUser = partieUser.filter((task) => task.idpartie === idpartie);
    }
    if (statut) {
      partieUser = partieUser.filter((task) => task.statut === statut);
    }
    return partieUser;
  }
}
