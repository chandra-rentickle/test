import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';

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
            groupId: 'order-service-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [ClientKafka]
})
export class AppModule {}
