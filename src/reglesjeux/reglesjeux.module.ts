import { Module } from '@nestjs/common';
import { ReglesjeuxService } from './service/reglesjeux.service';
import { ReglesjeuxController } from './controller/reglesjeux.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Reglesjeux} from "./model/entities/reglesjeux.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Reglesjeux])],
  exports: [TypeOrmModule],
  controllers: [ReglesjeuxController],
  providers: [ReglesjeuxService]
})
export class ReglesjeuxModule {}
