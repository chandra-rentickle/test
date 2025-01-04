import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'product',
  modelName: 'ProductEntity',
})
export class Product extends Model<Product> {
  @Column
  name: string;

  @Column
  category: string;
}
