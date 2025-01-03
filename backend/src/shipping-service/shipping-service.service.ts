import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shipment } from './entities/shipping.entity';

@Injectable()
export class ShipmentService {
  constructor(
    @InjectModel(Shipment.name) private shipmentModel: Model<Shipment>,
  ) {}

  async create(shipmentData: Partial<Shipment>): Promise<Shipment> {
    const shipment = new this.shipmentModel(shipmentData);
    return shipment.save();
  }

  async findAll(): Promise<Shipment[]> {
    return this.shipmentModel.find();
  }

  async findOne(trackingNumber: string): Promise<Shipment> {
    return this.shipmentModel.findOne({ trackingNumber }).exec();
  }

  async updateStatus(
    trackingNumber: string,
    status: string,
  ): Promise<Shipment> {
    return this.shipmentModel
      .findOneAndUpdate({ trackingNumber }, { status }, { new: true })
      .exec();
  }

  async delete(trackingNumber: string): Promise<Shipment> {
    return this.shipmentModel.findOneAndDelete({ trackingNumber }).exec();
  }
}
