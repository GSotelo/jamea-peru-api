import { Controller, Get, Param } from '@nestjs/common';
import { SideDishesService } from './side-dishes.service';
import type { SideDishId } from './side-dishes.types';

@Controller('side-dishes')
export class SideDishesController {
  constructor(private readonly sideDishesService: SideDishesService) {}

  @Get()
  findMenu() {
    return this.sideDishesService.findMenu();
  }

  @Get(':id')
  findRecipe(@Param('id') id: SideDishId) {
    return this.sideDishesService.findRecipe(id);
  }
}
