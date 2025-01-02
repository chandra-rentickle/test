import { Module } from '@nestjs/common';
import { OrderService } from './order-service.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { OrderModel } from './entities/order.entity';
import { OrderController } from './order-service.controller';

@Module({
  imports:[SequelizeModule.forFeature([OrderModel])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderServiceModule {}
