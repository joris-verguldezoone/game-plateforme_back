import { Module } from '@nestjs/common';
import { ListeamisService } from './service/listeamis.service';
import { ListeamisController } from './controller/listeamis.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Listeamis} from "./model/entities/listeami.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Listeamis])],
  exports: [TypeOrmModule],
  controllers: [ListeamisController],
  providers: [ListeamisService]
})
export class ListeamisModule {}
