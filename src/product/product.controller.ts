import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { AttributeValue } from './entities/attribute-value.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('test')
  test() {
    return 'ok';
  }

  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('category') category: string,
  ) {
    return this.productService.createProduct(name, category);
  }

  @Get('all')
  getAllProduct() {
    return this.productService.getAllProducts();
  }

  @Post(':productId/attributes') async addAttribute(
    @Param('productId') productId: number,
    @Body('attributeId') attributeId: number,
    @Body('value') value: string,
  ): Promise<AttributeValue> {
    return this.productService.addAttribute(productId, attributeId, value);
  }

  @Get(':productId/attributes')
  getAttribute(
    @Param('productId') productId: number,
  ): Promise<AttributeValue[]> {
    return this.productService.getAttributeValue(productId);
  }
}
