import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Shipment extends Document {
  @Prop({ required: true })
  trackingNumber: string;

  @Prop({ required: true })
  sender: string;

  @Prop({ required: true })
  receiver: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  status: string; // e.g., 'Pending', 'Shipped', 'Delivered'

  @Prop()
  shippingDate: Date;

  @Prop()
  estimatedDeliveryDate: Date;

  @Prop()
  actualDeliveryDate: Date;

  @Prop()
  shippingMethod: string; // e.g., 'Air', 'Ground', 'Sea'
}

export const ShipmentSchema = SchemaFactory.createForClass(Shipment);
