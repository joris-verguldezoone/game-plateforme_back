import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from '../dto/create-type.dto';
import { UpdateTypeDto } from '../dto/update-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../users/model/entities/user.entity';
import { Repository } from 'typeorm';
import { UserInterface } from '../../users/model/user.interface';
import { from, Observable } from 'rxjs';
import { Type } from '../model/entities/type.entity';
import { TypesInterface } from '../model/types.interface';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private readonly typeRepository: Repository<Type>,
  ) {}

  create(type: CreateTypeDto): Promise<TypesInterface> {
    return this.typeRepository.save(type);
  }

  findAll(): Promise<Type[]> {
    return this.typeRepository.find();
  }

  findOne(id: number) {
    return this.typeRepository.findOne({ id });
  }

  update(id: number, type: UpdateTypeDto): Promise<any> {
    return this.typeRepository.update(id, type);
  }

  remove(id: number): Promise<any> {
    return this.typeRepository.delete(id);
  }
  async getTypesWithFilters(filterDto: CreateTypeDto): Promise<Type[]> {
    console.log(filterDto);
    const { typedejeux, nbdejeux, nbcartes, typedecarte } = filterDto;

    let reglesJeux = await this.findAll();

    if (typedejeux) {
      reglesJeux = reglesJeux.filter((task) => task.typedejeux == typedejeux);
    }
    if (nbdejeux) {
      reglesJeux = reglesJeux.filter((task) => task.nbdejeux == nbdejeux);
    }
    if (nbcartes) {
      reglesJeux = reglesJeux.filter((task) => task.nbcartes == nbcartes);
    }
    if (typedecarte) {
      reglesJeux = reglesJeux.filter((task) => task.typedecarte == typedecarte);
    }
    return reglesJeux;
  }
}
