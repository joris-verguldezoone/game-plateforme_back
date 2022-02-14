import { Injectable } from '@nestjs/common';
import { CreateReglesjeuxDto } from '../dto/create-reglesjeux.dto';
import { UpdateReglesjeuxDto } from '../dto/update-reglesjeux.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../users/model/entities/user.entity";
import {Repository} from "typeorm";
import {UserInterface} from "../../users/model/user.interface";
import {from, Observable} from "rxjs";
import {Reglesjeux} from "../model/entities/reglesjeux.entity";
import {ReglesjeuxInterface} from "../model/reglesjeux.interface";

@Injectable()
export class ReglesjeuxService {
  constructor(
      @InjectRepository(Reglesjeux) private readonly reglesjeuxRepository: Repository<ReglesjeuxInterface>
  ){}

  create(reglesjeux: ReglesjeuxInterface): Observable <ReglesjeuxInterface> {
    return from(this.reglesjeuxRepository.save(reglesjeux));
  }

  findAll(): Observable <ReglesjeuxInterface[]> {
    return from(this.reglesjeuxRepository.find());
  }

  findOne(id: number) {
    return from(this.reglesjeuxRepository.findOne({id}));
  }

  update(id: number, reglesjeux:ReglesjeuxInterface): Observable<any> {
    return from(this.reglesjeuxRepository.update(id, reglesjeux));

  }

  remove(id: number): Observable<any> {
    return from(this.reglesjeuxRepository.delete(id));
  }
}
