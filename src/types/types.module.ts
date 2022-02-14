import { Module } from '@nestjs/common';
import { TypesService } from './service/types.service';
import { TypesController } from './controller/types.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Type} from "./model/entities/type.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  exports: [TypeOrmModule],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
