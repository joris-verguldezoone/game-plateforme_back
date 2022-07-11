import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, createQueryBuilder, Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Jeux } from '../model/entities/jeux.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateJeuxDto } from '../dto/create-jeux.dto';
import { JeuxInterface } from "../model/jeux.interface";
import { UpdateJeuxDto } from "../dto/update-jeux.dto";
import { GetJeuxDto } from "../dto/get-jeux.dto";

@Injectable()
export class JeuxService {
  constructor(
    @InjectRepository(Jeux) private readonly jeuxRepository: Repository<Jeux>,
  ) { }

  create(jeux: CreateJeuxDto): Promise<JeuxInterface> {
    return this.jeuxRepository.save(jeux);
  }

  findAll(): Promise<Jeux[]> {
    return this.jeuxRepository.find();
  }

  update(id: number, jeux: UpdateJeuxDto): Promise<any> {
    return this.jeuxRepository.update(id, jeux);
  }

  remove(id: number): Promise<any> {
    return this.jeuxRepository.delete(id);
  }
  async getGamesWithFilters(filterDto: GetJeuxDto): Promise<any> { // FILTER FUNCTION
    /*  La fonction renvoie désormais des innerJoin
        Elle ne peut plus etre de type Promise<Jeux> et return autre chose  */
    console.log(filterDto); // typeof() avant autre vérification s'il y a un bug
    console.log(filterDto.id)
    const { nom, idtype, id } = filterDto;

    if (id) {
      const query = await createQueryBuilder('jeux', 'j')
        .innerJoinAndSelect('j.reglesjeux', 'r')
        .innerJoinAndSelect('j.idtype2', 't')
        .innerJoinAndSelect('r.iddifficulte2', 'd')
        .where('j.id =:id', { id: id })
        .getOne(); // getMany() si on cherche plusieurs jeux et l'ensemble de leur innerJoin

      console.log(query['reglesjeux'][0].iddifficulte2.difficulte) // exemple d'accessibilité au résultat
      return query // il faudrait normaliser les Fetch 
    }

    let jeux = await this.findAll();

    if (nom) {
      jeux = jeux.filter((task) => task.nom === nom);
    }
    if (idtype) {
      jeux = jeux.filter((task) => task.idtype == idtype);
    }
    return jeux;
  }
}
