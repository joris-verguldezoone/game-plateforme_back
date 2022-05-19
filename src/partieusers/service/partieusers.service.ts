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

@Injectable()
export class PartieusersService {
  constructor(
    @InjectRepository(Partieuser)
    private readonly partieuserRepository: Repository<Partieuser>,
  ) {}

  create(partiesuser: Partieuser): Promise<Partieuser> {
    return this.partieuserRepository.save(partiesuser);
  }

  findAll(): Promise<Partieuser[]> {
    return this.partieuserRepository.find();
  }

  findOne(id: number) {
    return this.partieuserRepository.findOne({ id });
  }

  update(id: number, partiesuser: Partieuser): Promise<any> {
    return this.partieuserRepository.update(id, partiesuser);
  }

  remove(id: number): Promise<any> {
    return this.partieuserRepository.delete(id);
  }
  async getPartieusersWithFilters(
    filterDto: CreatePartieuserDto,
  ): Promise<Partieuser[]> {
    console.log(filterDto);
    const { iduser, idpartie, statut } = filterDto;

    let reglesJeux = await this.findAll();

    if (iduser) {
      reglesJeux = reglesJeux.filter((task) => task.iduser == iduser);
    }
    if (idpartie) {
      reglesJeux = reglesJeux.filter((task) => task.idpartie === idpartie);
    }
    if (statut) {
      reglesJeux = reglesJeux.filter((task) => task.statut === statut);
    }
    return reglesJeux;
  }
}
