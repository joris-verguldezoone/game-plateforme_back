import { Injectable } from '@nestjs/common';
import { CreateReglesjeuxDto } from '../dto/create-reglesjeux.dto';
import { UpdateReglesjeuxDto } from '../dto/update-reglesjeux.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../users/model/entities/user.entity';
import { Repository } from 'typeorm';
import { UserInterface } from '../../users/model/user.interface';
import { filter, from, Observable } from 'rxjs';
import { Reglesjeux } from '../model/entities/reglesjeux.entity';
import { ReglesjeuxInterface } from '../model/reglesjeux.interface';
import { GetReglesjeuxDto } from '../dto/get-reglesjeux.dto';
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
      // console.log(idjeux);
      // console.log(filterDto);

      reglesJeux = reglesJeux.filter((task) => task.idjeux === idjeux);
      console.log(reglesJeux);
    }
    if (nomregle) {
      reglesJeux = reglesJeux.filter((task) => task.nomregle === nomregle);
      console.log(reglesJeux);
    }
    if (regle) {
      reglesJeux = reglesJeux.filter((task) => task.regle === regle);
      console.log(reglesJeux);
    }
    if (iddifficulte) {
      reglesJeux = reglesJeux.filter((task) => task.iddifficulte === iddifficulte);
      console.log(reglesJeux);
    }
    let intnbjoueurmin;
    if (nbjoueurmin) {
      console.log(typeof nbjoueurmin)
      intnbjoueurmin = parseInt(nbjoueurmin)
      reglesJeux = reglesJeux.filter((task) => task.nbjoueurmin === intnbjoueurmin);
      console.log(reglesJeux);
    }
    if (nbjoueurmax) {
      reglesJeux = reglesJeux.filter((task) => task.nbjoueurmin === nbjoueurmax);
      console.log(reglesJeux);
    }

    // console.log(filterDto);
    // const keys = Object.keys(filterDto);
    // console.log(keys);
    // const values = Object.values(filterDto);
    // console.log(values);
    // const result = [];
    // for (let i = 0; i < keys.length; i++) {
    //   reglesJeux = reglesJeux.filter(
    //     (task) => task.idjeux === parseInt(values[i]),
    //   );
    //   console.log(reglesJeux);
    // }
    // console.log(result);

    return reglesJeux;
  }

  findOne(id: number) {
    return this.reglesjeuxRepository.findOne({ id });
  }
  // findOneIdGame(idjeux: number) {
  //   return this.reglesjeuxRepository.findOne({ idjeux });
  // }
  // async findOneByIdJeux(idjeux: string): Promise<any> {
  //   const reglesJeux = await this.reglesjeuxRepository
  //     .createQueryBuilder('r')
  //     .where('r.idjeux = :idjeux', { idjeux })
  //     .select('*')
  //     .getOne();

  //   return reglesJeux;
  // }x

  update(id: number, reglesjeux: UpdateReglesjeuxDto): Promise<any> {
    return this.reglesjeuxRepository.update(id, reglesjeux);
  }

  remove(id: number): Promise<any> {
    return this.reglesjeuxRepository.delete(id);
  }
}
