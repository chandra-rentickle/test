import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { InventoryService } from './inventory-service.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.inventoryService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.inventoryService.remove(id);
  }
}
