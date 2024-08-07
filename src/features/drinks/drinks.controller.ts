import { Controller, Get, Param } from '@nestjs/common';
import { DrinksService } from './drinks.service';
import type { DrinkId } from './drinks.types';

@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}
  @Get()
  findMenu() {
    return this.drinksService.findMenu();
  }

  @Get(':id')
  findRecipe(@Param('id') id: DrinkId) {
    return this.drinksService.findRecipe(id);
  }
}
