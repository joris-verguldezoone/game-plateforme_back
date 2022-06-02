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
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { GetScoreDto } from '../dto/get-score.dto';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private readonly scoreRepository: Repository<Score>,
  ) { }

  create(score: CreateScoreDto): Promise<ScoresInterface> {
    return this.scoreRepository.save(score);
  }

  findAll(): Promise<Score[]> {
    return this.scoreRepository.find();
  }


  update(id: number, score: UpdateScoreDto): Promise<any> {
    return this.scoreRepository.update(id, score);
  }

  remove(id: number): Promise<any> {
    return this.scoreRepository.delete(id);
  }
  async getScoresWithFilters(filterDto: GetScoreDto): Promise<Score[]> {
    console.log(filterDto);
    const { score, iduser, idpartie, id } =
      filterDto;

    let scoreTable = await this.findAll();

    if (id) {
      scoreTable = scoreTable.filter((task) => task.id == id);
    }
    if (score) {
      scoreTable = scoreTable.filter((task) => task.score == score);
    }
    if (iduser) {
      scoreTable = scoreTable.filter((task) => task.iduser === iduser);
    }
    if (idpartie) {
      scoreTable = scoreTable.filter((task) => task.idpartie === idpartie);
    }
    return scoreTable;
  }
}
