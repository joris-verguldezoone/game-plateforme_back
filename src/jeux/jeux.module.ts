import { Module } from '@nestjs/common';
import { JeuxService } from './service/jeux.service';
import { JeuxController } from './controller/jeux.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Jeux} from "./model/entities/jeux.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Jeux])],
  exports: [TypeOrmModule],
  controllers: [JeuxController],
  providers: [JeuxService]
})
export class JeuxModule {}
