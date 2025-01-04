import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Attribute } from './entities/attribute.entity';
import { AttributeValue } from './entities/attribute-value.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [

    SequelizeModule.forFeature([Product, Attribute, AttributeValue]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
