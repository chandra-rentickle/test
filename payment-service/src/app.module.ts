import { Module } from '@nestjs/common';
import { PaymentListener } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'payment-service-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [PaymentListener], // Register the Kafka listener
})
export class AppModule {}
