import { Injectable } from '@nestjs/common';
import { CreatePartieuserDto } from '../dto/create-partieuser.dto';
import { UpdatePartieuserDto } from '../dto/update-partieuser.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { UserInterface } from '../../users/model/user.interface';
import { from, Observable } from 'rxjs';
import { Partieuser } from '../model/entities/partieuser.entity';
import { PartieusersInterface } from '../model/partieusers.interface';

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
}
