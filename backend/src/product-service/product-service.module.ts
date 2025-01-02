import { Module } from '@nestjs/common';
import { ProductService } from './product-service.service';
import { ProductController } from './product-service.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModel } from './entities/product.entity';

@Module({
  imports:[SequelizeModule.forFeature([ProductModel])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductServiceModule {}
