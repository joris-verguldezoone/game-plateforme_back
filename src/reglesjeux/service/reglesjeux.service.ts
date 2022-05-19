import { Injectable } from '@nestjs/common';
import { CreateReglesjeuxDto } from '../dto/create-reglesjeux.dto';
import { UpdateReglesjeuxDto } from '../dto/update-reglesjeux.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reglesjeux } from '../model/entities/reglesjeux.entity';

@Injectable()
export class ReglesjeuxService {
  constructor(
    @InjectRepository(Reglesjeux)
    private readonly reglesjeuxRepository: Repository<Reglesjeux>,
  ) {}

  create(reglesjeux: Reglesjeux): Promise<Reglesjeux> {
    return this.reglesjeuxRepository.save(reglesjeux);
  }

  findAll(): Promise<Reglesjeux[]> {
    console.log('we are in findAll()');
    return this.reglesjeuxRepository.find();
  }
  async getGameRulesWithFilters(
    filterDto: CreateReglesjeuxDto,
  ): Promise<Reglesjeux[]> {
    console.log(filterDto);
    const { idjeux, nomregle, regle, iddifficulte, nbjoueurmin, nbjoueurmax } =
      filterDto;

    let reglesJeux = await this.findAll();

    if (idjeux) {
      reglesJeux = reglesJeux.filter((task) => task.idjeux == idjeux);
    }
    if (nomregle) {
      reglesJeux = reglesJeux.filter((task) => task.nomregle === nomregle);
    }
    if (regle) {
      reglesJeux = reglesJeux.filter((task) => task.regle === regle);
    }
    if (iddifficulte) {
      reglesJeux = reglesJeux.filter(
        (task) => task.iddifficulte == iddifficulte,
      );
    }
    if (nbjoueurmin) {
      reglesJeux = reglesJeux.filter((task) => task.nbjoueurmin == nbjoueurmin);
    }
    if (nbjoueurmax) {
      reglesJeux = reglesJeux.filter((task) => task.nbjoueurmin == nbjoueurmax);
    }
    return reglesJeux;
  }

  findOne(id: number) {
    return this.reglesjeuxRepository.findOne({ id });
  }

  update(id: number, reglesjeux: UpdateReglesjeuxDto): Promise<any> {
    return this.reglesjeuxRepository.update(id, reglesjeux);
  }

  remove(id: number): Promise<any> {
    return this.reglesjeuxRepository.delete(id);
  }
}
