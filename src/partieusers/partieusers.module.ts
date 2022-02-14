import { Module } from '@nestjs/common';
import { PartieusersService } from './service/partieusers.service';
import { PartieusersController } from './controller/partieusers.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Partieuser} from "./model/entities/partieuser.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Partieuser])],
  exports: [TypeOrmModule],
  controllers: [PartieusersController],
  providers: [PartieusersService]
})
export class PartieusersModule {}
