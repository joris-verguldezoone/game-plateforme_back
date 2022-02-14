import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from '../dto/create-score.dto';
import { UpdateScoreDto } from '../dto/update-score.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../users/model/entities/user.entity";
import {Repository} from "typeorm";
import {UserInterface} from "../../users/model/user.interface";
import {from, Observable} from "rxjs";
import {Score} from "../model/entities/score.entity";
import {ScoresInterface} from "../model/scores.interface";

@Injectable()
export class ScoresService {
  constructor(
      @InjectRepository(Score) private readonly userRepository: Repository<ScoresInterface>
  ){}

  create(score: ScoresInterface): Observable <ScoresInterface> {
    return from(this.userRepository.save(score));
  }

  findAll(): Observable <ScoresInterface[]> {
    return from(this.userRepository.find());
  }

  findOne(id: number) {
    return from(this.userRepository.findOne({id}));
  }

  update(id: number, score:ScoresInterface): Observable<any> {
    return from(this.userRepository.update(id, score));

  }

  remove(id: number): Observable<any> {
    return from(this.userRepository.delete(id));
  }
}
