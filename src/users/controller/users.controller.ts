import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserInterface } from '../model/user.interface';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../model/entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
  @Get('findusers/:username')
  findOneName(@Param() params): Promise<User> {
    return this.usersService.findOneName(params.username);
  }
  @Get(':id')
  findOne(@Param() params): Promise<User> {
    return this.usersService.findOne(params.id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<any> {
    this.usersService.update(+id, user);
    let update = await this.usersService.findOneName(user.username);
    delete update.password
    console.log(update)

    return update

  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(Number(id));
  }
}
