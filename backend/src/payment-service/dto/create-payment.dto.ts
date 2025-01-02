export class CreatePaymentDto {
    readonly orderId: number;
    readonly paymentMethod: string;
    readonly amount: number;
    readonly paymentDate: Date;
  }
  