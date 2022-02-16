import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Difficulte } from '../model/entities/difficulte.entity';

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
}
