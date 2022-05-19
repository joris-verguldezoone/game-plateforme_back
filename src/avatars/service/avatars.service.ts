import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AvatarInterface } from '../model/avatar.interface';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Avatar } from '../model/entities/avatar.entity';
import { User } from '../../users/model/entities/user.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateAvatarDto } from '../dto/create-avatar.dto';

@Injectable()
export class AvatarsService {
  constructor(
    @InjectRepository(Avatar)
    private readonly avatarRepository: Repository<Avatar>,
  ) {}

  create(avatar: Avatar): Promise<Avatar> {
    return this.avatarRepository.save(avatar);
  }

  findAll(): Promise<Avatar[]> {
    return this.avatarRepository.find();
  }

  findOne(id: number): Promise<Avatar> {
    return this.avatarRepository.findOne({ id });
  }

  update(id: number, avatar: Avatar): Promise<any> {
    return this.avatarRepository.update(id, avatar);
  }

  remove(id: number): Promise<any> {
    return this.avatarRepository.delete(id);
  }
  async getAvatarsWithFilters(
    filterDto: CreateAvatarDto,
  ): Promise<Avatar[]> {
    console.log(filterDto);
    const { description, image, iduser } = filterDto;

    let reglesJeux = await this.findAll();

    if (description) {
      reglesJeux = reglesJeux.filter(
        (task) => task.description === description,
      );
    }
    if (image) {
      reglesJeux = reglesJeux.filter((task) => task.image === image);
    }
    if (iduser) {
      reglesJeux = reglesJeux.filter((task) => task.iduser == iduser);
    }
    return reglesJeux;
  }
}
