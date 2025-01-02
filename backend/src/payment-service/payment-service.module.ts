import { Module } from '@nestjs/common';
import { PaymentService } from './payment-service.service';
import { PaymentController } from './payment-service.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaymentModel } from './entities/payment.entity';

@Module({
  imports: [SequelizeModule.forFeature([PaymentModel])],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentServiceModule {}
