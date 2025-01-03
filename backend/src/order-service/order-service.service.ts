import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderModel } from './entities/order.entity';


@Injectable()
export class OrderService {
  constructor(
    @InjectModel(OrderModel)
    private readonly orderModel: typeof OrderModel,
  ) {}
   
  create(createOrderDto: CreateOrderDto): Promise<OrderModel> {
    return this.orderModel.create(createOrderDto);
  }

  findAll(): Promise<OrderModel[]> {
    return this.orderModel.findAll();
  }

  findOne(id: number): Promise<OrderModel> {
    return this.orderModel.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.orderModel.destroy({ where: { id } });
  }
}
