import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {DifficulteInterface} from "../../difficulte/model/difficulte.interface";
import {from, Observable} from "rxjs";
import {Difficulte} from "../model/entities/difficulte.entity";

@Injectable()
export class DifficulteService {
  constructor( @InjectRepository(Difficulte) private readonly difficulteRepository: Repository<DifficulteInterface>) {
  }


create(difficulte: DifficulteInterface): Observable <DifficulteInterface> {
  return from(this.difficulteRepository.save(difficulte));
}

findAll(): Observable <DifficulteInterface[]> {
  return from(this.difficulteRepository.find());
}

findOne(id: number) {
  return from(this.difficulteRepository.findOne({id}));
}

update(id: number, difficulte:DifficulteInterface): Observable<any> {
  return from(this.difficulteRepository.update(id, difficulte));

}

remove(id: number): Observable<any> {
  return from(this.difficulteRepository.delete(id));
}
}
