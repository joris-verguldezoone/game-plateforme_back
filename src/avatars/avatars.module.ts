import { Module } from '@nestjs/common';
import { AvatarsService } from './service/avatars.service';
import { AvatarsController } from './controller/avatars.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Avatar} from "./model/entities/avatar.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Avatar])],
  exports: [TypeOrmModule],
  controllers: [AvatarsController],
  providers: [AvatarsService],
})
export class AvatarsModule {}
