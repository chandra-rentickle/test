import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: 'environment/.env',
    }),

    SequelizeModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        dialect: 'mysql',
        uri: configService.get<string>('DB_URI'),
        autoLoadModels: true,
        synchronize: true, //here i am connectin g to local db that's why done sync: true
      }),
      inject: [ConfigService],
    }),

    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), // Get the MongoDB URI from the environment
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppConfigModule {}
