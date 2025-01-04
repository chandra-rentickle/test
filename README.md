### Kafka-based Microservices with NestJS

- This project demonstrates a Kafka-based microservices architecture using NestJS. It includes two services: Order Service and Payment Service, which communicate via Kafka events to handle order creation and payment processing.

## Features

### Order Service:

- Exposes an API for creating orders.

- Publishes order.created events to Kafka.

- Payment Service:

- Listens for order.created events from Kafka.

- Processes payments and logs success or failure.


### Technologies Used

- NestJS

- Apache Kafka

- Docker Compose (for Kafka setup)

```

cd order-service
npm install


```


```

cd ../payment-service
npm install

```


```
http://localhost:3000/order

```

```
{
  "id": 1,
  "total": 100
}

```

```

{
  "message": "Order created",
  "order": {
    "id": 1,
    "total": 100
  }
}

```


```
Order received for payment processing: { id: 1, total: 100 }
Payment succeeded for Order ID: 1
```

```
.
├── order-service
│   ├── src
│   │   ├── order.controller.ts
│   │   ├── order.service.ts
│   └── ...
├── payment-service
│   ├── src
│   │   ├── payment.listener.ts
│   │   └── ...
└── docker-compose.yml

```


