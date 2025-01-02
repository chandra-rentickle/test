import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { UpdateOrderServiceDto } from './dto/update-order-service.dto';
import { OrderService } from './order-service.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order-service')
export class OrderController {
  constructor(private readonly orderServiceService: OrderService) {}

  @Post()
  create(@Body() createOrderServiceDto: CreateOrderDto) {
    return this.orderServiceService.create(createOrderServiceDto);
  }

  @Get()
  findAll() {
    return this.orderServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderServiceService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderServiceService.remove(+id);
  }
}
