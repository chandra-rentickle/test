import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './entities/user.entity';
import { CreateUserDto  } from './dto/create-user-service.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: typeof UserModel,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userModel.findAll({where:{id:1}});
  }
}
