import { Module } from '@nestjs/common';
import { InventoryController } from './inventory-service.controller';
import { InventoryService } from './inventory-service.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { InventoryModel } from './entities/inventory.entity';


@Module({
  imports:[SequelizeModule.forFeature([InventoryModel])],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryServiceModule {}
