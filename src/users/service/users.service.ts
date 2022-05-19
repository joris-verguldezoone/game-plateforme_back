import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInterface } from '../model/user.interface';
import { Repository } from 'typeorm';

import { User } from '../model/entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(user: CreateUserDto): Promise<UserInterface> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ id });
  }

  findOneName(username: string): Promise<User> {
    return this.userRepository.findOne({ username }); // function joris
  }

  update(id: number, user: UpdateUserDto): Promise<any> {
    return this.userRepository.update(id, user);
  }

  remove(id: number): Promise<any> {
    return this.userRepository.delete(id);
  }
  async getUsersWithFilters(
    filterDto: CreateUserDto,
  ): Promise<User[]> {
    console.log(filterDto);
    const { username, idavatar, role } = filterDto;

    let reglesJeux = await this.findAll();

    if (username) {
      reglesJeux = reglesJeux.filter((task) => task.username == username);
    }
    if (idavatar) {
      reglesJeux = reglesJeux.filter((task) => task.idavatar == idavatar);
    }
    if (role) {
      reglesJeux = reglesJeux.filter((task) => task.role === role);
    }
    return reglesJeux;
  }
}
