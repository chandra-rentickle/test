import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { ProductModel } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  create(createProductDto: CreateProductDto): Promise<ProductModel> {
    return this.productModel.create(createProductDto);
  }

  findAll(): Promise<ProductModel[]> {
    return this.productModel.findAll();
  }

  findOne(id: number): Promise<ProductModel> {
    return this.productModel.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.productModel.destroy({ where: { id } });
  }
}
