import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AvatarInterface } from '../model/avatar.interface';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Avatar } from '../model/entities/avatar.entity';
import { User } from '../../users/model/entities/user.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { CreateAvatarsDto } from '../dto/create-avatar.dto';
import { UpdateAvatarDto } from "../dto/update-avatar.dto";
import { GetAvatarsDto } from "../dto/get-avatars.dto";

@Injectable()
export class AvatarsService {
  constructor(
    @InjectRepository(Avatar)
    private readonly avatarRepository: Repository<Avatar>,
  ) { }

  create(avatar: CreateAvatarsDto): Promise<AvatarInterface> {
    return this.avatarRepository.save(avatar);
  }

  findAll(): Promise<Avatar[]> {
    return this.avatarRepository.find();
  }

  update(id: number, avatar: UpdateAvatarDto): Promise<any> {
    return this.avatarRepository.update(id, avatar);
  }

  remove(id: number): Promise<any> {
    return this.avatarRepository.delete(id);
  }
  async getAvatarsWithFilters(
    filterDto: GetAvatarsDto,
  ): Promise<Avatar[]> {
    console.log(filterDto);
    const { description, image, iduser, id } = filterDto;

    let avatar = await this.findAll();

    if (id) {
      avatar = avatar.filter((task) => task.id === id);
    }

    if (description) {
      avatar = avatar.filter((task) => task.description === description);
    }
    if (image) {
      avatar = avatar.filter((task) => task.image === image);
    }
    if (iduser) {
      console.log(iduser)
      avatar = avatar.filter((task) => task.iduser == iduser);
    }
    return avatar;
  }
}
