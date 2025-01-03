import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { Shipment } from './entities/shipping.entity';
import { ShipmentService } from './shipping-service.service';

@Controller('shipments')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Post()
  async create(@Body() shipmentData: Partial<Shipment>): Promise<Shipment> {
    return this.shipmentService.create(shipmentData);
  }

  @Get()
  async findAll(): Promise<Shipment[]> {
    return this.shipmentService.findAll();
  }

  @Get(':trackingNumber')
  async findOne(
    @Param('trackingNumber') trackingNumber: string,
  ): Promise<Shipment> {
    return this.shipmentService.findOne(trackingNumber);
  }

  @Put(':trackingNumber/status')
  async updateStatus(
    @Param('trackingNumber') trackingNumber: string,
    @Body('status') status: string,
  ): Promise<Shipment> {
    return this.shipmentService.updateStatus(trackingNumber, status);
  }

  @Delete(':trackingNumber')
  async delete(
    @Param('trackingNumber') trackingNumber: string,
  ): Promise<Shipment> {
    return this.shipmentService.delete(trackingNumber);
  }
}
