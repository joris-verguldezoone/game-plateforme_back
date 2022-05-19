import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Difficulte } from '../model/entities/difficulte.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateDifficulteDto } from '../dto/create-difficulte.dto';

@Injectable()
export class DifficulteService {
  constructor(
    @InjectRepository(Difficulte)
    private readonly difficulteRepository: Repository<Difficulte>,
  ) {}

  create(difficulte: Difficulte): Promise<Difficulte> {
    return this.difficulteRepository.save(difficulte);
  }

  findAll(): Promise<Difficulte[]> {
    return this.difficulteRepository.find();
  }

  findOne(id: number) {
    return this.difficulteRepository.findOne({ id });
  }

  update(id: number, difficulte: Difficulte): Promise<any> {
    return this.difficulteRepository.update(id, difficulte);
  }

  remove(id: number): Promise<any> {
    return this.difficulteRepository.delete(id);
  }
  async getDifficulteWithFilters(
    filterDto: CreateDifficulteDto,
  ): Promise<Difficulte[]> {
    console.log(filterDto);
    const { difficulte, multiplicateurscore } = filterDto;

    let reglesJeux = await this.findAll();

    if (difficulte) {
      reglesJeux = reglesJeux.filter((task) => task.difficulte === difficulte);
    }
    if (multiplicateurscore) {
      reglesJeux = reglesJeux.filter(
        (task) => task.multiplicateurscore == multiplicateurscore,
      );
    }
    return reglesJeux;
  }
}
