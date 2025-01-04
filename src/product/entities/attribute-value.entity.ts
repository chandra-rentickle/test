import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Product } from './product.entity';
import { Attribute } from './attribute.entity';

@Table({
  tableName: 'attribute_value',
  modelName: 'AttributeValueModel',
})
export class AttributeValue extends Model<AttributeValue> {
  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => Attribute)
  @Column
  attributeId: number;

  @Column
  value: string;
}
