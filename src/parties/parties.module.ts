import { Module } from '@nestjs/common';
import { PartiesService } from './service/parties.service';
import { PartiesController } from './controller/parties.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Partie} from "./model/entities/party.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Partie])],
  exports: [TypeOrmModule],
  controllers: [PartiesController],
  providers: [PartiesService]
})
export class PartiesModule {}
