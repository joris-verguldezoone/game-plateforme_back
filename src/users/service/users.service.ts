import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserInterface } from "../model/user.interface";
import { Repository } from "typeorm";
import { from, Observable } from "rxjs";
import { User } from "../model/entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) { }

  create(user: UserInterface): Observable<UserInterface> {
    return from(this.userRepository.save(user));
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User>{
    return this.userRepository.findOne({ id });
  }

  findOneName(username: string): Promise<User> {
    return this.userRepository.findOne({ username }); // function joris
  }

  // findByUsername(username: string): Observable<UserInterface> {
  //   return from(this.userRepository.findOne({
  //       where: {
  //         username: username,
  //     }
  //   }));
  // }

  update(id: number, user: UserInterface): Observable<any> {
    return from(this.userRepository.update(id, user));

  }

  remove(id: number): Observable<any> {
    return from(this.userRepository.delete(id));
  }
}
