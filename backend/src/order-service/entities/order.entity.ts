import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class OrderModel extends Model<OrderModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  totalAmount: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  orderDate: Date;
}
