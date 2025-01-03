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



## Cloud Architecture

```
title E-commerce Application Architecture
direction right
title E-commerce Application Architecture

Frontend [icon: monitor] {
  User Interface [icon: monitor]
}

API Gateway [icon: aws-api-gateway]

Backend Services [icon: server] {
  Order Service [icon: package]
    Order Database  [icon: database] {
    Orders Table [icon:table]
    Order_Items Table [icon:table]
    }
  Product Service [icon: box]
    Product Database  [icon: database] {
    Products Table [icon:table]
    Categories Table [icon:table]
    }
  User Service [icon: user]
    User Database  [icon: database] {
    Users Table [icon:table]
    User_Profiles Table [icon:table]
    }
  Payment Service [icon: dollar-sign]
    Payment Database  [icon: database] {
    Payments Table [icon:table]
    Transactions Table [icon:table]
    }
  Inventory Service [icon: layers]
    Inventory Database  [icon: database] {
    Inventory Table [icon:table]
    Stock_Updates Table [icon:table]
    }
  Shipping Service [icon: truck]
    Shipping Database  [icon: database] {
    Shipments Table [icon:table]
    Tracking Table [icon:table]
    }
}

Infrastructure [icon: settings] {
  Docker Compose [icon: docker, label: "docker-compose.yml"]
  Kubernetes [icon: k8s-cluster]
}

// Connections
Frontend > API Gateway: routes requests

// API Gateway connections
API Gateway > Order Service
API Gateway > Product Service
API Gateway > User Service
API Gateway > Payment Service
API Gateway > Inventory Service
API Gateway > Shipping Service

// Infrastructure support
Docker Compose --> Backend Services: local setup
Kubernetes --> Backend Services: deployment and scaling
Order Service > Orders Table
Order Service > Order_Items Table
Product Service > Products Table
Product Service > Categories Table
User Service > Users Table
User Service > User_Profiles Table
Payment Service > Payments Table
Payment Service > Transactions Table
Inventory Service > Inventory Table
Inventory Service > Stock_Updates Table
Shipping Service > Shipments Table
Shipping Service > Tracking Table

```

```
![image](https://github.com/user-attachments/assets/c3db8439-5c49-4aa7-b9f7-43cc60f56d1e)


```
