import { Injectable } from '@nestjs/common';
import { CreateJeuxDto } from '../dto/create-jeux.dto';
import { UpdateJeuxDto } from '../dto/update-jeux.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {from, Observable} from "rxjs";
import {Jeux} from "../model/entities/jeux.entity";
import {JeuxInterface} from "../model/jeux.interface";

@Injectable()
export class JeuxService {
  constructor(
      @InjectRepository(Jeux) private readonly jeuxRepository: Repository<JeuxInterface>
  ){}

  create(jeux: JeuxInterface): Observable <JeuxInterface> {
    return from(this.jeuxRepository.save(jeux));
  }

  findAll(): Observable <JeuxInterface[]> {
    return from(this.jeuxRepository.find());
  }

  findOne(id: number) {
    return from(this.jeuxRepository.findOne({id}));
  }

  update(id: number, jeux: JeuxInterface): Observable<any> {
    return from(this.jeuxRepository.update(id, jeux));

  }

  remove(id: number): Observable<any> {
    return from(this.jeuxRepository.delete(id));
  }
}
