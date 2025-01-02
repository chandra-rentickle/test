import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShippingServiceService } from './shipping-service.service';
import { CreateShippingServiceDto } from './dto/create-shipping-service.dto';
import { UpdateShippingServiceDto } from './dto/update-shipping-service.dto';

@Controller('shipping-service')
export class ShippingServiceController {
  constructor(private readonly shippingServiceService: ShippingServiceService) {}

  @Post()
  create(@Body() createShippingServiceDto: CreateShippingServiceDto) {
    return this.shippingServiceService.create(createShippingServiceDto);
  }

  @Get()
  findAll() {
    return this.shippingServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShippingServiceDto: UpdateShippingServiceDto) {
    return this.shippingServiceService.update(+id, updateShippingServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingServiceService.remove(+id);
  }
}
