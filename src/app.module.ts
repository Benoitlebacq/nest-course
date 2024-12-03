import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MessagesModule } from "./messages/messages.module";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JeanmichelModule } from './jeanmichel/jeanmichel.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Rendre les variables accessibles dans tout le projet
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Attention : désactiver en production
      }),
    }),
    MessagesModule,
    UsersModule,
    AuthModule,
    JeanmichelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
