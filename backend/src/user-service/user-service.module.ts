import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './entities/user.entity';
import { UserController } from './user-service.controller';
import { UserService } from './user-service.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserServiceModule {}
