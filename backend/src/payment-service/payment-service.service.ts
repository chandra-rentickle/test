import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentModel } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(PaymentModel)
    private readonly paymentModel: typeof PaymentModel,
  ) {}

  async createProduct() {
    return 'hello product 1';
  }
}
