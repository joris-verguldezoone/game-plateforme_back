import { Module } from '@nestjs/common';
import { ScoresService } from './service/scores.service';
import { ScoresController } from './controller/scores.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Score} from "./model/entities/score.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Score])],
  exports: [TypeOrmModule],
  controllers: [ScoresController],
  providers: [ScoresService]
})
export class ScoresModule {}
