import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('order')
export class OrderController {
  constructor(@Inject('KAFKA_SERVICE') private kafkaClient: ClientKafka) {}

  @Post()
  async createOrder(@Body() order: any) {
    // Emit OrderCreated event
    this.kafkaClient.emit('order.created', {
      key: `${order.id}`,
      value: order,
    });
    return { message: 'Order created', order };
  }
}



