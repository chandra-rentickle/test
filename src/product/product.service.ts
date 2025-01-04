import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Attribute } from './entities/attribute.entity';
import { AttributeValue } from './entities/attribute-value.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
    @InjectModel(Attribute)
    private readonly attributeModel: typeof Attribute,
    @InjectModel(AttributeValue)
    private readonly attributeValueModel: typeof AttributeValue,
  ) {}

  async createProduct(name: string, category: string): Promise<Product> {
    return this.productModel.create({ name, category });
  }

  async getAllProducts() {
    return this.productModel.findAll()
  }

  async addAttribute(
    productId: number,
    attributeId: number,
    value: string,
  ): Promise<AttributeValue> {
    return this.attributeValueModel.create({ productId, attributeId, value });
  }

  async getAttributeValue(productId: number): Promise<AttributeValue[]> {
    return this.attributeValueModel.findAll({ where: { id: productId } });
  }
}
