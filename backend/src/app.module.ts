import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderServiceModule } from './order-service/order-service.module';
import { ProductServiceModule } from './product-service/product-service.module';
import { UserServiceModule } from './user-service/user-service.module';
import { PaymentServiceModule } from './payment-service/payment-service.module';
import { InventoryServiceModule } from './inventory-service/inventory-service.module';
import { ShippingServiceModule } from './shipping-service/shipping-service.module';
import { AppConfigModule } from './shared/config/config.module';

@Module({
  imports: [
    AppConfigModule,
    OrderServiceModule,
    ProductServiceModule,
    UserServiceModule,
    PaymentServiceModule,
    InventoryServiceModule,
    ShippingServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
