### Ecommerce App

## microservice 

# using pattern language to setup all the serviuce implementing optimized system and further on scales based on evolution.

```
ecommerce-app/
├── api-gateway/
├── backend/
│   ├── order-service/
│   ├── product-service/
│   ├── user-service/
│   ├── payment-service/
│   ├── inventory-service/
│   ├── shipping-service/
├── frontend/
├── docker-compose.yml
└── kubernetes/

```

```
backend/src/
├── inventory-service/
│   ├── controllers/
│   │   ├── inventory.controller.ts
│   ├── services/
│   │   ├── inventory.service.ts
│   ├── models/
│   │   ├── inventory.model.ts
│   ├── dtos/
│   │   ├── create-inventory.dto.ts
│   ├── inventory-service.module.ts
```


```
backend/src/
├── inventory-service/
│   ├── controllers/
│   │   ├── inventory.controller.ts
│   ├── services/
│   │   ├── inventory.service.ts
│   ├── models/
│   │   ├── inventory.model.ts
│   ├── dtos/
│   │   ├── create-inventory.dto.ts
│   ├── inventory-service.module.ts
├── product-service/
│   ├── controllers/
│   │   ├── product.controller.ts
│   ├── services/
│   │   ├── product.service.ts
│   ├── models/
│   │   ├── product.model.ts
│   ├── dtos/
│   │   ├── create-product.dto.ts
│   ├── product-service.module.ts
├── order-service/
│   ├── controllers/
│   │   ├── order.controller.ts
│   ├── services/
│   │   ├── order.service.ts
│   ├── models/
│   │   ├── order.model.ts
│   ├── dtos/
│   │   ├── create-order.dto.ts
│   ├── order-service.module.ts
├── user-service/
│   ├── controllers/
│   │   ├── user.controller.ts
│   ├── services/
│   │   ├── user.service.ts
│   ├── models/
│   │   ├── user.model.ts
│   ├── dtos/
│   │   ├── create-user.dto.ts
│   ├── user-service.module.ts
├── payment-service/
│   ├── controllers/
│   │   ├── payment.controller.ts
│   ├── services/
│   │   ├── payment.service.ts
│   ├── models/
│   │   ├── payment.model.ts
│   ├── dtos/
│   │   ├── create-payment.dto.ts
│   ├── payment-service.module.ts
├── shipping-service/
│   ├── controllers/
│   │   ├── shipping.controller.ts
│   ├── services/
│   │   ├── shipping.service.ts
│   ├── models/
│   │   ├── shipping.model.ts
│   ├── dtos/
│   │   ├── create-shipping.dto.ts
│   ├── shipping-service.module.ts
├── main.ts
├── app.module.ts
```