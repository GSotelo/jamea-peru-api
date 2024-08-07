import { Controller, Get, Param } from '@nestjs/common';
import { SoupsService } from './soups.service';
import type { SoupId } from './soups.types';

@Controller({
  path: 'soups',
  version: '1',
})
export class SoupsController {
  constructor(private readonly soupsService: SoupsService) {}

  @Get()
  findMenu() {
    return this.soupsService.findMenu();
  }

  @Get(':id')
  findRecipe(@Param('id') id: SoupId) {
    return this.soupsService.findRecipe(id);
  }
}
