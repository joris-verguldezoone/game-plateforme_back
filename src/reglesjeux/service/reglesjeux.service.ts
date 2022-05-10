import { Injectable } from '@nestjs/common';
import { CreateReglesjeuxDto } from '../dto/create-reglesjeux.dto';
import { UpdateReglesjeuxDto } from '../dto/update-reglesjeux.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../users/model/entities/user.entity";
import { Repository } from "typeorm";
import { UserInterface } from "../../users/model/user.interface";
import { from, Observable } from "rxjs";
import { Reglesjeux } from "../model/entities/reglesjeux.entity";
import { ReglesjeuxInterface } from "../model/reglesjeux.interface";
import { GetReglesjeuxDto } from '../dto/get-reglesjeux.dto';
@Injectable()
export class ReglesjeuxService {

  constructor(
    @InjectRepository(Reglesjeux) private readonly reglesjeuxRepository: Repository<Reglesjeux>
  ) { }

  create(reglesjeux: Reglesjeux): Promise<Reglesjeux> {
    return this.reglesjeuxRepository.save(reglesjeux);
  }

  findAll(): Promise<Reglesjeux[]> {
    console.log('we are in findAll()')

    return this.reglesjeuxRepository.find();
  }
  async getGameRulesWithFilters(filterDto: GetReglesjeuxDto): Promise<Reglesjeux[]> {
    const { idjeux, nomregle } = filterDto;

    let reglesJeux = await this.findAll()

    if (idjeux) {
      console.log(idjeux);
      let idjeuj = parseInt(idjeux)
      reglesJeux = (reglesJeux).filter(task => task.idjeux === idjeuj)
      console.log(reglesJeux)
    }


    if (nomregle) {
      reglesJeux = (reglesJeux).filter(task => task.nomregle === nomregle)
      console.log(reglesJeux)
    }


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
  // }

  update(id: number, reglesjeux: Reglesjeux): Promise<any> {
    return this.reglesjeuxRepository.update(id, reglesjeux);

  }

  remove(id: number): Promise<any> {
    return this.reglesjeuxRepository.delete(id);
  }
}
