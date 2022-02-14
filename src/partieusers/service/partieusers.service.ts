import { Injectable } from '@nestjs/common';
import { CreatePartieuserDto } from '../dto/create-partieuser.dto';
import { UpdatePartieuserDto } from '../dto/update-partieuser.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../users/model/entities/user.entity";
import {Repository} from "typeorm";
import {UserInterface} from "../../users/model/user.interface";
import {from, Observable} from "rxjs";
import {Partieuser} from "../model/entities/partieuser.entity";
import {PartieusersInterface} from "../model/partieusers.interface";

@Injectable()
export class PartieusersService {
  constructor(
      @InjectRepository(Partieuser) private readonly partieuserRepository: Repository<PartieusersInterface>
  ){}

  create(partiesuser: UserInterface): Observable <PartieusersInterface> {
    return from(this.partieuserRepository.save(partiesuser));
  }

  findAll(): Observable <PartieusersInterface[]> {
    return from(this.partieuserRepository.find());
  }

  findOne(id: number) {
    return from(this.partieuserRepository.findOne({id}));
  }

  update(id: number, partiesuser:PartieusersInterface): Observable<any> {
    return from(this.partieuserRepository.update(id, partiesuser));
  }

  remove(id: number): Observable<any> {
    return from(this.partieuserRepository.delete(id));
  }
}
