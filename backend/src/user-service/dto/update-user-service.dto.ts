import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user-service.dto';

export class UpdateUserServiceDto extends PartialType(CreateUserDto) {}
