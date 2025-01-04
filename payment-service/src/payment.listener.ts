import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class PaymentListener {
  @MessagePattern('order.created') // Listen to 'order.created' Kafka topic
  handleOrderCreatedEvent(@Payload() message: any) {
    const order = message?.value || message; // Ensure proper payload extraction

    if (!order) {
      console.error('Received undefined payload for order.created');
      return;
    }

    console.log('Order received for payment processing:', order);

    // Simulate payment processing
    const paymentSuccess = Math.random() > 0.5;

    if (paymentSuccess) {
      console.log(`Payment succeeded for Order ID: ${order.id}`);
    } else {
      console.log(`Payment failed for Order ID: ${order.id}`);
    }
  }
}
