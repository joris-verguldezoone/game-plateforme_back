import { Injectable } from '@nestjs/common';
import { CreatePartyDto } from '../dto/create-party.dto';
import { UpdatePartyDto } from '../dto/update-party.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Partie } from '../model/entities/party.entity';
import { PartiesInterface } from '../model/parties.interface';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { GetPartyDto } from '../dto/get-party.dto';

@Injectable()
export class PartiesService {
  constructor(
    @InjectRepository(Partie)
    private readonly partieRepository: Repository<Partie>,
  ) { }

  create(partie: CreatePartyDto): Promise<PartiesInterface> {
    return this.partieRepository.save(partie);
  }

  findAll(): Promise<Partie[]> {
    return this.partieRepository.find();
  }

  update(id: number, partie: UpdatePartyDto): Promise<any> {
    return this.partieRepository.update(id, partie);
  }

  remove(id: number): Promise<any> {
    return this.partieRepository.delete(id);
  }
  async getPartiesWithFilters(filterDto: CreatePartyDto): Promise<Partie[]> {
    console.log(filterDto);
    const { nbjoueurs, iddifficulte, idjeux, createdat, finishedat, id } =
      filterDto;

    let reglesJeux = await this.findAll();
    if (id) {
      reglesJeux = reglesJeux.filter((task) => task.id == id);
    }
    if (idjeux) {
      reglesJeux = reglesJeux.filter((task) => task.idjeux == idjeux);
    }
    if (nbjoueurs) {
      reglesJeux = reglesJeux.filter((task) => task.nbjoueurs === nbjoueurs);
    }
    if (createdat) {
      reglesJeux = reglesJeux.filter((task) => task.createdat == createdat);
    }
    if (iddifficulte) {
      reglesJeux = reglesJeux.filter(
        (task) => task.iddifficulte == iddifficulte,
      );
    }
    if (finishedat) {
      reglesJeux = reglesJeux.filter((task) => task.finishedat == finishedat);
    }

    return reglesJeux;
  }
}
