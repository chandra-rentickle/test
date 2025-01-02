import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryDto } from './create-inventory.dto';

export class UpdateInventoryServiceDto extends PartialType(CreateInventoryDto) {}
