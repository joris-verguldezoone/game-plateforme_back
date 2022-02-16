import { Injectable } from '@nestjs/common';
import { CreatePartyDto } from '../dto/create-party.dto';
import { UpdatePartyDto } from '../dto/update-party.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Partie } from '../model/entities/party.entity';
import { PartiesInterface } from '../model/parties.interface';

@Injectable()
export class PartiesService {
  constructor(
    @InjectRepository(Partie)
    private readonly partieRepository: Repository<Partie>,
  ) {}

  create(partie: Partie): Promise<Partie> {
    return this.partieRepository.save(partie);
  }

  findAll(): Promise<Partie[]> {
    return this.partieRepository.find();
  }

  findOne(id: number) {
    return this.partieRepository.findOne({ id });
  }

  update(id: number, partie: Partie): Promise<any> {
    return this.partieRepository.update(id, partie);
  }

  remove(id: number): Promise<any> {
    return this.partieRepository.delete(id);
  }
}
