import { Controller } from '@nestjs/common';
import { UserService } from './user-service.service';
import { CreateUserDto } from './dto/create-user-service.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  createUser(createUserDto: CreateUserDto){
    return this.userService.createUser(createUserDto)
  }
}
