import { Injectable } from '@nestjs/common';
import { CreateShippingServiceDto } from './dto/create-shipping-service.dto';
import { UpdateShippingServiceDto } from './dto/update-shipping-service.dto';

@Injectable()
export class ShippingServiceService {
  create(createShippingServiceDto: CreateShippingServiceDto) {
    return 'This action adds a new shippingService';
  }

  findAll() {
    return `This action returns all shippingService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shippingService`;
  }

  update(id: number, updateShippingServiceDto: UpdateShippingServiceDto) {
    return `This action updates a #${id} shippingService`;
  }

  remove(id: number) {
    return `This action removes a #${id} shippingService`;
  }
}
