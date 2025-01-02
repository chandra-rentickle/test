import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName:"inventory",
  modelName:"Inventory"
})
export class InventoryModel extends Model<InventoryModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productName: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock: number;
}
