import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/service/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/model/entities/user.entity';
import { UserInterface } from 'src/users/model/user.interface';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneName(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: any) {

    const payload = {
      bonjour: 'bonjour',
      sub: user.id,
      username: user.username,
      id_avatar: user.id_avatar,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
