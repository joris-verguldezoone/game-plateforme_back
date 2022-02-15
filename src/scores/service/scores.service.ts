import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from '../dto/create-score.dto';
import { UpdateScoreDto } from '../dto/update-score.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../users/model/entities/user.entity';
import { Repository } from 'typeorm';
import { UserInterface } from '../../users/model/user.interface';
import { from, Observable } from 'rxjs';
import { Score } from '../model/entities/score.entity';
import { ScoresInterface } from '../model/scores.interface';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score) private readonly userRepository: Repository<Score>,
  ) {}

  create(score: Score): Promise<Score> {
    return this.userRepository.save(score);
  }

  findAll(): Promise<Score[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ id });
  }

  update(id: number, score: Score): Promise<any> {
    return this.userRepository.update(id, score);
  }

  remove(id: number): Promise<any> {
    return this.userRepository.delete(id);
  }
}
