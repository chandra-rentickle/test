import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'attribute',
  modelName: 'AttributeEntity',
})
export class Attribute extends Model<Attribute> {
  @Column
  name: string;

  @Column
  dataType: string;
}
