import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderServiceModule } from './order-service/order-service.module';
import { ProductServiceModule } from './product-service/product-service.module';
import { UserServiceModule } from './user-service/user-service.module';
import { PaymentServiceModule } from './payment-service/payment-service.module';
import { InventoryServiceModule } from './inventory-service/inventory-service.module';
import { ShippingServiceModule } from './shipping-service/shipping-service.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppConfigModule } from './shared/config/config.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'mysql',
        uri: configService.get<string>('DB_URI'),
        autoLoadModels: true,
        synchronize: true,  //here i am connectin g to local db that's why done sync: true
      }),
      inject: [ConfigService],
    }),
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
