import { Controller, Get, Param } from '@nestjs/common';
import { DessertsService } from './desserts.service';
import type { DessertId } from './desserts.types';

@Controller({
  path: 'desserts',
  version: '1',
})
export class DessertsController {
  constructor(private readonly dessertsService: DessertsService) {}
  @Get()
  findMenu() {
    return this.dessertsService.findMenu();
  }

  @Get(':id')
  findRecipe(@Param('id') id: DessertId) {
    return this.dessertsService.findRecipe(id);
  }
}
