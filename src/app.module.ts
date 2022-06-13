import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './users/model/entities/user.entity';
// import { AvatarsModule } from './avatars/avatars.module';
// import { Avatar } from "./avatars/model/entities/avatar.entity";
import { UsersModule } from './users/users.module';
import { AvatarsModule } from './avatars/avatars.module';
import { DifficulteModule } from './difficulte/difficulte.module';
import { JeuxModule } from './jeux/jeux.module';
import { ListeamisModule } from './listeamis/listeamis.module';
import { PartiesModule } from './parties/parties.module';
import { PartieusersModule } from './partieusers/partieusers.module';
import { ReglesjeuxModule } from './reglesjeux/reglesjeux.module';
import { ScoresModule } from './scores/scores.module';
import { TypesModule } from './types/types.module';
import { Avatar } from './avatars/model/entities/avatar.entity';
import { Difficulte } from './difficulte/model/entities/difficulte.entity';
import { Jeux } from './jeux/model/entities/jeux.entity';
import { Listeamis } from './listeamis/model/entities/listeami.entity';
import { Partie } from './parties/model/entities/party.entity';
import { Partieuser } from './partieusers/model/entities/partieuser.entity';
import { Reglesjeux } from './reglesjeux/model/entities/reglesjeux.entity';
import { Score } from './scores/model/entities/score.entity';
import { Type } from './types/model/entities/type.entity';
import { AuthModule } from './auth/auth.module';
import { AuthService } from "./auth/auth.service";
import { LobbyModule } from './lobby/lobby.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'jeux',
      entities: [
        User,
        Avatar,
        Difficulte,
        Jeux,
        Listeamis,
        Partie,
        Partieuser,
        Reglesjeux,
        Score,
        Type,
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    AvatarsModule,
    DifficulteModule,
    JeuxModule,
    ListeamisModule,
    PartiesModule,
    PartieusersModule,
    ReglesjeuxModule,
    ScoresModule,
    TypesModule,
    LobbyModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
