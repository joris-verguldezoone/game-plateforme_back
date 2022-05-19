import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Jeux } from '../model/entities/jeux.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateJeuxDto } from '../dto/create-jeux.dto';

@Injectable()
export class JeuxService {
  constructor(
    @InjectRepository(Jeux) private readonly jeuxRepository: Repository<Jeux>,
  ) {}

  create(jeux: Jeux): Promise<Jeux> {
    return this.jeuxRepository.save(jeux);
  }

  findAll(): Promise<Jeux[]> {
    return this.jeuxRepository.find();
  }

  findOne(id: number) {
    return this.jeuxRepository.findOne({ id });
  }

  update(id: number, jeux: Jeux): Promise<any> {
    return this.jeuxRepository.update(id, jeux);
  }

  remove(id: number): Promise<any> {
    return this.jeuxRepository.delete(id);
  }
  async getGamesWithFilters(filterDto: CreateJeuxDto): Promise<Jeux[]> {
    console.log(filterDto);
    const { nom, idtype } = filterDto;

    let reglesJeux = await this.findAll();

    if (nom) {
      reglesJeux = reglesJeux.filter((task) => task.nom === nom);
    }
    if (idtype) {
      reglesJeux = reglesJeux.filter((task) => task.idtype == idtype);
    }
    return reglesJeux;
  }
}
