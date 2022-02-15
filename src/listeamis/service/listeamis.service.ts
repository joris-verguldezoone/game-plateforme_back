import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listeamis } from '../model/entities/listeami.entity';


@Injectable()
export class ListeamisService {
  constructor(
    @InjectRepository(Listeamis)
    private readonly listeamisRepository: Repository<Listeamis>,
  ) {}

  create(listeamis: Listeamis): Promise<Listeamis> {
    return this.listeamisRepository.save(listeamis);
  }

  findAll(): Promise<Listeamis[]> {
    return this.listeamisRepository.find();
  }

  findOne(id: number) {
    return this.listeamisRepository.findOne({ id });
  }

  update(id: number, listeamis: Listeamis): Promise<any> {
    return this.listeamisRepository.update(id, listeamis);
  }

  remove(id: number): Promise<any> {
    return this.listeamisRepository.delete(id);
  }
}
