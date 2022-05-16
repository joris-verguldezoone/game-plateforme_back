import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInterface } from '../model/user.interface';
import { Repository } from 'typeorm';

import { User } from '../model/entities/user.entity';
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";

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
}
