import { Module } from '@nestjs/common';
import { DifficulteService } from './service/difficulte.service';
import { DifficulteController } from './controller/difficulte.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/model/entities/user.entity";
import {Difficulte} from "./model/entities/difficulte.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Difficulte])],
  exports: [TypeOrmModule],
  controllers: [DifficulteController],
  providers: [DifficulteService]
})
export class DifficulteModule {}
