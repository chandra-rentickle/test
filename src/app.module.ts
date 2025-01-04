import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product/entities/product.entity';
import { Attribute } from './product/entities/attribute.entity';
import { AttributeValue } from './product/entities/attribute-value.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'csm',
      password: 'csm',
      database: 'product_db',
      autoLoadModels: true,
      synchronize: true,
      models: [Product, Attribute, AttributeValue],
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
