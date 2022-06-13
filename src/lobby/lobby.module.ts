import { Module } from '@nestjs/common';
import { LobbyService } from './service/lobby.service';
import { LobbyController } from './controller/lobby.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lobby } from "./model/entities/lobby.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Lobby])],
    exports: [TypeOrmModule],
    controllers: [LobbyController],
    providers: [LobbyService]
})
export class LobbyModule { }
