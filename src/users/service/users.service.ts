import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInterface } from '../model/user.interface';
import { Repository } from 'typeorm';

import { User } from '../model/entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { GetUserDto } from '../dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  create(user: CreateUserDto): Promise<UserInterface> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    console.log("caca");
    return this.userRepository.find();
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
  async getUsersWithFilters(filterDto: GetUserDto): Promise<User[]> {
    console.log(filterDto);
    console.log(typeof (filterDto));

    console.log('zoulette');
    var { id, username, idavatar, role } = filterDto;
    console.log(typeof (filterDto.role));
    console.log(filterDto.role);
    console.log(typeof (role))
    console.log(role)
    let allUsers = await this.findAll();

    if (id) {
      allUsers = allUsers.filter((task) => task.id == id)
    }
    if (username) {
      allUsers = allUsers.filter((task) => task.username == username);
      console.log(allUsers);
    }
    if (idavatar) {
      allUsers = allUsers.filter((task) => task.idavatar == idavatar);
    }
    if (role) {
      allUsers = allUsers.filter((task) => task.role === Number(role));
    }
    return allUsers;
  }
}
