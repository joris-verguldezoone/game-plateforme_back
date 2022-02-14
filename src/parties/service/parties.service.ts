import { Injectable } from '@nestjs/common';
import { CreatePartyDto } from '../dto/create-party.dto';
import { UpdatePartyDto } from '../dto/update-party.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../users/model/entities/user.entity";
import {Repository} from "typeorm";
import {UserInterface} from "../../users/model/user.interface";
import {from, Observable} from "rxjs";
import {Partie} from "../model/entities/party.entity";
import {PartiesInterface} from "../model/parties.interface";

@Injectable()
export class PartiesService {
  constructor(
      @InjectRepository(Partie) private readonly partieRepository: Repository<PartiesInterface>
  ){}

  create(partie: PartiesInterface): Observable <PartiesInterface> {
    return from(this.partieRepository.save(partie));
  }

  findAll(): Observable <PartiesInterface[]> {
    return from(this.partieRepository.find());
  }

  findOne(id: number) {
    return from(this.partieRepository.findOne({id}));
  }

  update(id: number, partie:PartiesInterface): Observable<any> {
    return from(this.partieRepository.update(id, partie));

  }

  remove(id: number): Observable<any> {
    return from(this.partieRepository.delete(id));
  }
}
