import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from '../dto/create-type.dto';
import { UpdateTypeDto } from '../dto/update-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../users/model/entities/user.entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { UserInterface } from '../../users/model/user.interface';
import { from, Observable } from 'rxjs';
import { Type } from '../model/entities/type.entity';
import { TypesInterface } from '../model/types.interface';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { GetTypeDto } from '../dto/get-type.dto';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private readonly typeRepository: Repository<Type>,
  ) { }

  create(type: CreateTypeDto): Promise<TypesInterface> {
    return this.typeRepository.save(type);
  }

  findAll(): Promise<Type[]> {
    return this.typeRepository.find();
  }

  update(id: number, type: UpdateTypeDto): Promise<any> {
    return this.typeRepository.update(id, type);
  }

  remove(id: number): Promise<any> {
    return this.typeRepository.delete(id);
  }
  async getTypesWithFilters(filterDto: GetTypeDto): Promise<Type[]> {
    console.log(filterDto);
    console.log('we are in services')
    const { typedejeux, nbdejeux, nbcartes, typedecarte, id } = filterDto;

    let types = await this.findAll();


    if (id) {
      types = types.filter((task) => task.id == id);


      //       const user = await createQueryBuilder("user")
      //     .innerJoin("user.photos", "photo")
      //     .where("user.name = :name", { name: "Timber" })
      //     .getOne()
      // This will generate:

      // SELECT user.* FROM users user
      //     INNER JOIN photos photo ON photo.user = user.id
      //     WHERE user.name = 'Timber'


      //     SELECT r.*, t.* , d.* FROM reglesjeux AS r 
      // INNER JOIN jeux AS j 
      // ON j.id = r.idjeux
      // INNER JOIN type AS t 
      // ON t.id = j.idtype
      // INNER JOIN difficulte AS d 
      // ON d.id = r.iddifficulte
      // WHERE j.id = 1
    }
    if (typedejeux) {
      types = types.filter((task) => task.typedejeux == typedejeux);
    }
    if (nbdejeux) {
      types = types.filter((task) => task.nbdejeux == nbdejeux);
    }
    if (nbcartes) {
      types = types.filter((task) => task.nbcartes == nbcartes);
    }
    if (typedecarte) {
      types = types.filter((task) => task.typedecarte == typedecarte);
    }
    return types;
  }
}
