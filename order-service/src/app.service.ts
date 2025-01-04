import { Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(private readonly kafkaClient: ClientKafka) {}

  createOrder(order: any) {
    // Publish the order.created event with a properly serialized payload
    this.kafkaClient.emit('order.created', {
      key: `${order.id}`, // Optional, Kafka message key
      value: order,       // Payload
    });
    return { message: 'Order created', order };
  }
}