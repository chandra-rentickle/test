import { PartialType } from '@nestjs/mapped-types';
import { CreateShippingServiceDto } from './create-shipping-service.dto';

export class UpdateShippingServiceDto extends PartialType(CreateShippingServiceDto) {}
