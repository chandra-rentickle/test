import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { InventoryModel } from './entities/inventory.entity';
import { CreateInventoryDto } from './dto/create-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(InventoryModel)
    private readonly inventoryModel: typeof InventoryModel,
  ) {}

  create(createInventoryDto: CreateInventoryDto): Promise<InventoryModel> {
    return this.inventoryModel.create(createInventoryDto);
  }

  findAll(): Promise<InventoryModel[]> {
    return this.inventoryModel.findAll();
  }

  findOne(id: number): Promise<InventoryModel> {
    return this.inventoryModel.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.inventoryModel.destroy({ where: { id } });
  }
}
