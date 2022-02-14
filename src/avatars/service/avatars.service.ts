import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {AvatarInterface} from "../model/avatar.interface";
import {Repository} from "typeorm";
import {from, Observable} from "rxjs";
import {Avatar} from "../model/entities/avatar.entity";

@Injectable()
export class AvatarsService {
  constructor(
      @InjectRepository(Avatar) private readonly avatarRepository: Repository<AvatarInterface>
  ){}

  create(avatar: AvatarInterface): Observable <AvatarInterface> {
    return from(this.avatarRepository.save(avatar));
  }

  findAll(): Observable <AvatarInterface[]> {
    return from(this.avatarRepository.find());
  }

  findOne(id: number) {
    return from(this.avatarRepository.findOne({id}));
  }

  update(id: number, avatar:AvatarInterface): Observable<any> {
    return from(this.avatarRepository.update(id, avatar));

  }

  remove(id: number): Observable<any> {
    return from(this.avatarRepository.delete(id));
  }
}
