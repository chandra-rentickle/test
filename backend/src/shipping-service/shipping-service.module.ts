import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { Shipment, ShipmentSchema } from './entities/shipping.entity';
import { ShipmentController } from './shipping-service.controller';
import { ShipmentService } from './shipping-service.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Shipment.name, schema: ShipmentSchema },
    ]),
  ],
  controllers: [ShipmentController],
  providers: [ShipmentService],
})
export class ShippingServiceModule {}
