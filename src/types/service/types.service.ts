import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from '../dto/create-type.dto';
import { UpdateTypeDto } from '../dto/update-type.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../users/model/entities/user.entity";
import {Repository} from "typeorm";
import {UserInterface} from "../../users/model/user.interface";
import {from, Observable} from "rxjs";
import {Type} from "../model/entities/type.entity";
import {TypesInterface} from "../model/types.interface";

@Injectable()
export class TypesService {
  constructor(
      @InjectRepository(Type) private readonly typeRepository: Repository<TypesInterface>
  ){}

  create(type: TypesInterface): Observable <TypesInterface> {
    return from(this.typeRepository.save(type));
  }

  findAll(): Observable <TypesInterface[]> {
    return from(this.typeRepository.find());
  }

  findOne(id: number) {
    return from(this.typeRepository.findOne({id}));
  }

  update(id: number, type:TypesInterface): Observable<any> {
    return from(this.typeRepository.update(id, type));

  }

  remove(id: number): Observable<any> {
    return from(this.typeRepository.delete(id));
  }
}
