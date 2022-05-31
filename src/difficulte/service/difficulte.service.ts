import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Difficulte } from '../model/entities/difficulte.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateDifficulteDto } from '../dto/create-difficulte.dto';
import { DifficulteInterface } from '../model/difficulte.interface';
import { UpdateDifficulteDto } from "../dto/update-difficulte.dto";
import { GetDifficulteDto } from "../dto/get-difficulte.dto";

@Injectable()
export class DifficulteService {
  constructor(
    @InjectRepository(Difficulte)
    private readonly difficulteRepository: Repository<Difficulte>,
  ) { }

  create(difficulte: CreateDifficulteDto): Promise<DifficulteInterface> {
    return this.difficulteRepository.save(difficulte);
  }

  findAll(): Promise<Difficulte[]> {
    return this.difficulteRepository.find();
  }

  findOne(id: number) {
    return this.difficulteRepository.findOne({ id });
  }

  update(id: number, difficulte: UpdateDifficulteDto): Promise<any> {
    return this.difficulteRepository.update(id, difficulte);
  }

  remove(id: number): Promise<any> {
    return this.difficulteRepository.delete(id);
  }
  async getDifficulteWithFilters(
    filterDto: GetDifficulteDto,
  ): Promise<Difficulte[]> {

    const { difficulte, multiplicateurscore, id } = filterDto;

    let difficulties = await this.findAll();

    if (id) {
      difficulties = difficulties.filter((task) => task.id === id);
    }
    if (difficulte) {
      difficulties = difficulties.filter((task) => task.difficulte === difficulte);
    }
    if (multiplicateurscore) {
      difficulties = difficulties.filter(
        (task) => task.multiplicateurscore == multiplicateurscore,
      );
    }
    return difficulties;
  }
}
