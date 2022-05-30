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
  Query,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserInterface } from '../model/user.interface';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../model/entities/user.entity';
import { CreateReglesjeuxDto } from '../../reglesjeux/dto/create-reglesjeux.dto';
import { Reglesjeux } from '../../reglesjeux/model/entities/reglesjeux.entity';
import { GetUserDto } from '../dto/get-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() user: CreateUserDto): Promise<UserInterface> {
    return this.usersService.create(user);
  }
  @Get()
  getTask(@Query() filterDto: GetUserDto): Promise<User[]> {
    if (Object.keys(filterDto).length) {
      console.log(filterDto);
      return this.usersService.getUsersWithFilters(filterDto);
    } else {
      console.log('?????');
      return this.usersService.findAll();
    }
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
  update(@Param('id') id: string, @Body() user: UpdateUserDto): Promise<any> {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(Number(id));
  }
}
