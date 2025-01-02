import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment-service.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  create() {
    return this.paymentService.createProduct();
  }
}
