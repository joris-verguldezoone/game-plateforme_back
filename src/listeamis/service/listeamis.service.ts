import { Injectable } from '@nestjs/common';
import { CreateListeamiDto } from '../dto/create-listeami.dto';
import { UpdateListeamiDto } from '../dto/update-listeami.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../users/model/entities/user.entity";
import {Repository} from "typeorm";
import {UserInterface} from "../../users/model/user.interface";
import {from, Observable} from "rxjs";
import {Listeamis} from "../model/entities/listeami.entity";
import {ListeamisInterface} from "../model/listeamis.interface";

@Injectable()
export class ListeamisService {
  constructor(
      @InjectRepository(Listeamis) private readonly listeamisRepository: Repository<ListeamisInterface>
  ){}

  create(listeamis: ListeamisInterface): Observable <ListeamisInterface> {
    return from(this.listeamisRepository.save(listeamis));
  }

  findAll(): Observable <ListeamisInterface[]> {
    return from(this.listeamisRepository.find());
  }

  findOne(id: number) {
    return from(this.listeamisRepository.findOne({id}));
  }

  update(id: number, listeamis:ListeamisInterface): Observable<any> {
    return from(this.listeamisRepository.update(id, listeamis));

  }

  remove(id: number): Observable<any> {
    return from(this.listeamisRepository.delete(id));
  }
}
